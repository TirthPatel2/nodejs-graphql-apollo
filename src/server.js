const path = require("path");

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const { ApolloServer } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const products = require("./products/products.model");
const orders = require("./orders/orders.model");

const PORT = process.env.PORT;

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`[Server]: server running on port ${PORT}`);
  });
}

startApolloServer();
