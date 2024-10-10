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

exports.createTestingResult = async (data) => {
  try {
    const { stackId, userId } = data;

    const testingResult = await TestingResultServices.createTestingResult({
      userId,
      stackId,
      quantityTrue: 0,
      quantityFalse: 0,
      currentStackTaskId: 0,
    });

    return true;
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
    console.log(
      id,
      stackId,
      userId,
      quantityTrue,
      quantityFalse,
      currentStackTaskId
    );
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
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTestingResult = async (data) => {
  try {
    const { userId, stackId } = data;
    console.log(stackId, userId);
    await TestingResultServices.deleteTestingResult({ userId, stackId });
    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
