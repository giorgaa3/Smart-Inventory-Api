const Product = require("./product.model");

async function create(data) {
  return Product.create(data);
}

async function list() {
  return Product.find().sort({ createdAt: -1 });
}

async function getById(id) {
  const p = await Product.findById(id);
  if (!p) throw new Error("Product not found");
  return p;
}

async function update(id, data) {
  const p = await Product.findByIdAndUpdate(id, data, { new: true });
  if (!p) throw new Error("Product not found");
  return p;
}

async function remove(id) {
  const p = await Product.findByIdAndDelete(id);
  if (!p) throw new Error("Product not found");
  return { deleted: true };
}

async function updateQuantity(id, delta) {
  const p = await Product.findById(id);
  if (!p) throw new Error("Product not found");

  const nextQty = p.quantity + delta;
  if (nextQty < 0) throw new Error("Quantity cannot go below 0");

  p.quantity = nextQty;
  await p.save();
  return p;
}

module.exports = { create, list, getById, update, remove, updateQuantity };
