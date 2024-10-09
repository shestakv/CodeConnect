const user = require("../../db/models/user");
const TestingResultServices = require("../services/TestingResultServices");

exports.getTestingResultById = async (id) => {
  try {
    console.log(id);
    const testingResult = await TestingResultServices.getTestingResultById(id);
    if (testingResult) {
      return testingResult;
    } else {
      return null;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTestingResult = async (req, res) => {
  try {
    const { stackId } = req.body;

    const testingResult = await TestingResultServices.createTestingResult({
      userId: res.locals.user.id,
      stackId,
      quantityTrue: 0,
      quantityFalse: 0,
      currentStackId: 1,
    });

    res.status(201).json({ message: "success", testingResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTestingResult = async (data, res) => {
  try {
    const {
      id,
      stackId,
      userId,
      quantityTrue,
      quantityFalse,
      currentStackTaskId,
    } = data;
console.log(id, stackId, userId, quantityTrue, quantityFalse, currentStackTaskId);
    let testingResult = await TestingResultServices.getTestingResultById(id);
   
    if (testingResult) {
      testingResult = await TestingResultServices.updateTestingResult({
        id,
        stackId,
        userId,
        quantityTrue,
        quantityFalse,
        currentStackTaskId,
      });
      return;
      //   res.status(200).json({ message: "success", testingResult });
      // } else {
      //   res.status(404).json({ message: "Testing Result not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTestingResult = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;

    let testingResult = await TestingResultServices.getTestingResultById(id);
    if (testingResult) {
      await TestingResultServices.deleteTestingResult(id, userId);
      res.status(200).json({ message: "success" });
    } else {
      res.status(404).json({ message: "Testing Result not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
