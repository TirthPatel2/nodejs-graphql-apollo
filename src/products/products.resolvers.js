const productsModel = require("./products.model");

module.exports = {
  Query: {
    productById: (_parent, args, _conext, _info) => {
      return productsModel.getProductById(args.id);
    },
    products: (_dparent, _args, _conext, _info) => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_parent, args, _conext, _info) => {
      return productsModel.getProductByPrice(args.min, args.max);
    },
  },

  Mutation: {
    addNewProduct: (_parent, args, _conext, _info) => {
      console.log(args);
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },

    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};

/**
 * query{
  productById(id:"1"){
    description
  }
  productsByPrice(min:40,max:100){
    description
    price
  }
  products{
    description
    price
  }
  orders{
    date
    subTotal
    items{
      product{
        id
        description
      }
      Qty
    }
  }
}
 */
