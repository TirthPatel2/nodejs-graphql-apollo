const orders = [
  {
    date: "2024-02-01",
    items: [{ product: { id: "2", description: "Jeans", price: 20 }, Qty: 1 }],
    subTotal: 20,
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
