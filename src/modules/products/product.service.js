const Product = require("./product.model");

async function create(data) {
  return Product.create(data);
}

async function list() {
  return Product.find().sort({ createdAt: -1 });
}

module.exports = { create, list };
