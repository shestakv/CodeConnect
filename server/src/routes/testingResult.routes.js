const router = require("express").Router();
const testingResultController = require("../controllers/testingResultController");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router
  .route("/")
  .get(testingResultController.getAllTestingResults)
  .post(verifyAccessToken, testingResultController.createTestingResult);

router
  .route("/:id")
  .get(testingResultController.getTestingResultById)
  .delete(verifyAccessToken, testingResultController.deleteTestingResult);

module.exports = router;
