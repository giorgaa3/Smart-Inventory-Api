const router = require("express").Router();
const controller = require("./product.controller");

router.post("/", controller.create);
router.get("/", controller.list);

router.get("/:id", controller.get);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

// quantity change: { "delta": 5 } or { "delta": -2 }
router.patch("/:id/quantity", controller.updateQuantity);

module.exports = router;
