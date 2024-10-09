const router = require("express").Router();
const stackTaskController = require("../controllers/stackTaskController");

router.route("/").post(stackTaskController.checkAnswer);

module.exports = router;
