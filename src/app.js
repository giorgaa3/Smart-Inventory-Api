require("dotenv").config();
const express = require("express");

const productRoutes = require("./modules/products/product.routes");
const alertsRoutes = require("./modules/alerts/alerts.routes");

const app = express();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/alerts", alertsRoutes);

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Smart Inventory API is running" });
});

module.exports = app;

