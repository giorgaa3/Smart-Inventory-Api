const Product = require("../products/product.model");

async function lowStock() {
  return Product.find({
    $expr: { $lte: ["$quantity", "$minQuantity"] }
  }).sort({ quantity: 1 });
}

module.exports = { lowStock };
