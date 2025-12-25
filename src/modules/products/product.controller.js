const service = require("./product.service");

async function create(req, res) {
  const product = await service.create(req.body);
  res.status(201).json(product);
}

async function list(req, res) {
  const products = await service.list();
  res.json(products);
}

module.exports = { create, list };
