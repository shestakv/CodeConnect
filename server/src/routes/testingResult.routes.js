const router = require("express").Router();
const testingResultController = require("../controllers/testingResultController");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router
  .route("/")
  .post(verifyAccessToken, testingResultController.createTestingResult);

router
  .route("/:id")
  .get(testingResultController.getTestingResultById)
  .put(verifyAccessToken, testingResultController.updateTestingResult)
  .delete(verifyAccessToken, testingResultController.deleteTestingResult);

module.exports = router;
