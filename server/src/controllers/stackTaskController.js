const user = require("../../db/models/user");
const StackTaskServices = require("../services/StackTaskServices");
const {
  updateTestingResult,
  getTestingResultById,
} = require("./testingResultController");

exports.checkAnswer = async (req, res) => {
  try {
    const { id, answer, testingResultId } = req.body;

    const stackTask = await StackTaskServices.getStackTaskById(id);
    const testingResult = await getTestingResultById(testingResultId);

    if (answer === stackTask.trueAnswer) {
      if (testingResult) {
        const resultTrue = await updateTestingResult({
          id: testingResultId,
          userId: testingResult.userId,
          stackId: testingResult.stackId,
          quantityTrue: testingResult.quantityTrue + 1,
          quantityFalse: testingResult.quantityFalse,
          currentStackTaskId: testingResult.currentStackTaskId + 1,
        });
        console.log(resultTrue);
        res.status(200).json({ result: true });
      }
    } else {
      console.log("false");
      if (testingResult) {
        const resultFalse = await updateTestingResult({
          id: testingResultId,
          userId: testingResult.userId,
          stackId: testingResult.stackId,
          quantityTrue: testingResult.quantityTrue,
          quantityFalse: testingResult.quantityFalse + 1,
          currentStackTaskId: testingResult.currentStackTaskId + 1,
        });
        console.log(resultFalse);
        res.status(200).json({ result: false });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
