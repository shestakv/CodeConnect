const router = require("express").Router();
const stackController = require("../controllers/stackController");

router.route("/").get(stackController.getAllStacks);

router.route("/:id").get(stackController.getStackById);

module.exports = router;
