const { TestingResult } = require("../../db/models");

class TestingResultServices {
  static createTestingResult = async ({
    userId,
    stackId,
    quantityTrue,
    quantityFalse,
    currentStackId,
  } = {}) => {
    try {
      const testingResult = await TestingResult.create({
        userId,
        stackId,
        quantityTrue,
        quantityFalse,
        currentStackId,
      });
      return testingResult.get();
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getTestingResultById = async (id) => {
    try {
      const testingResult = await TestingResult.findByPk(id);
      return testingResult ? testingResult.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static updateTestingResult = async (data) => {
    const { id, userId, stackId, quantityTrue, quantityFalse, currentStackTaskId } =
      data;
    const testingResult = await TestingResult.findOne({
      where: { id, userId },
    });

    console.log(testingResult);
    if (testingResult) {
      return testingResult.update({
        id,
        userId,
        stackId,
        quantityTrue,
        quantityFalse,
        currentStackTaskId,
      });
    }
    return null;
  };

  static deleteTestingResult = async (id, userId) => {
    try {
      const testingResult = await TestingResult.destroy({
        where: { id, userId },
      });
      return;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = TestingResultServices;
