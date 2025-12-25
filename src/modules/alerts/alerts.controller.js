const service = require("./alerts.service");

async function lowStock(req, res) {
  const items = await service.lowStock();
  res.json(items);
}

module.exports = { lowStock };
