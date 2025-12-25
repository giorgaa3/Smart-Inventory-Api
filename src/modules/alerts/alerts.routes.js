const router = require("express").Router();
const controller = require("./alerts.controller");

router.get("/low-stock", controller.lowStock);

module.exports = router;
