require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const productRoutes = require("./modules/products/product.routes");
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Smart Inventory API is running" });
});

module.exports = app;

