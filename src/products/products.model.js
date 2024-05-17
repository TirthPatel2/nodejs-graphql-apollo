const products = [
  { id: 1, description: "Shooes", price: 100, reviews: [] },
  { id: 2, description: "Jeans", price: 20, reviews: [] },
];

function getProductById(id) {
  console.log("Products", typeof id);
  return products.find((product) => product.id.toString() === id);
  /**or can be like this
   *   return products.find((product) => product.id == id);
   */
}

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter(
    (product) => product.price <= max && product.price >= min
  );
}

function addNewProduct(id, description, price) {
  const newProduct = { id, description, price, reviews: [] };

  products.push(newProduct);

  return newProduct;
}

function addNewReview(id, rating, comment) {
  const product = getProductById(id);

  if (product) {
    const newReview = { rating, comment };

    product.reviews.push(newReview);

    return newReview;
  }
  return null;
}

module.exports = {
  getProductById,
  getAllProducts,
  getProductByPrice,
  addNewProduct,
};
