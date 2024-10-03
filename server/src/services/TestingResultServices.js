const { TestingResult } = require("../../db/models");

class TestingResultServices {
  static createTestingResult = async ({
    userId,
    stackId,
    quantityCorrect,
    quantityTrue,
    quantityFalse,
    currentStackId,
  } = {}) => {
    try {
      const testingResult = await TestingResult.create({
        userId,
        stackId,
        quantityCorrect,
        quantityTrue,
        quantityFalse,
        currentStackId,
      });
      return testingResult.get();
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getAllTestingResults = async (query) => {
    try {
      const testingResults = await TestingResult.findAll({ where: query });
      return testingResults
        ? testingResults.map((testingResult) => testingResult.get())
        : null;
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
    const { id, userId, name, email, phone, description, logo } = data;
    const testingResult = await TestingResult.findOne({
      where: { id, userId },
    });
    if (testingResult) {
      return testingResult.update({
        userId,
        name,
        email,
        phone,
        description,
        logo,
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
