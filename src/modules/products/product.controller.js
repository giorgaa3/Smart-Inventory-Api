const service = require("./product.service");

async function create(req, res) {
  const product = await service.create(req.body);
  res.status(201).json(product);
}

async function list(req, res) {
  const products = await service.list();
  res.json(products);
}

async function get(req, res) {
  const product = await service.getById(req.params.id);
  res.json(product);
}

async function update(req, res) {
  const product = await service.update(req.params.id, req.body);
  res.json(product);
}

async function remove(req, res) {
  const result = await service.remove(req.params.id);
  res.json(result);
}

async function updateQuantity(req, res) {
  const { delta } = req.body;
  const product = await service.updateQuantity(req.params.id, Number(delta));
  res.json(product);
}

module.exports = { create, list, get, update, remove, updateQuantity };
