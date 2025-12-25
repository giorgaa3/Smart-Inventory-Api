const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    sku: { type: String, required: true, unique: true, trim: true },
    quantity: { type: Number, default: 0, min: 0 },
    minQuantity: { type: Number, default: 0, min: 0 },
    price: { type: Number, default: 0, min: 0 },
    unit: { type: String, default: "pcs" },
    note: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
