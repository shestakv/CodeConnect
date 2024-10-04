const { UserStack, TestingResult } = require("../../db/models");

class UserStackServices {
  static createUserStack = async ({ userId, stackId, grade } = {}) => {
    try {
      const userStack = await UserStack.create({
        userId,
        stackId,
        grade,
      });
      return userStack.get();
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getAllUserStacks = async (userId) => {
    try {
      const userStacks = await UserStack.findAll({
        where: { userId },
        include: {
          model: TestingResult,
          attributes: [
            "id",
            "userId",
            "stackId",
            "quantityCorrect",
            "quantityTrue",
            "quantityFalse",
            "currentStackId",
          ],
        },
      });
      return userStacks ? userStacks.map((userStack) => userStack.get()) : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getUserStackById = async (id) => {
    try {
      const userStack = await UserStack.findByPk(id);
      return userStack ? userStack.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static deleteUserStack = async (id, userId) => {
    try {
      await UserStack.destroy({ where: { id, userId } });
      return;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = UserStackServices;
