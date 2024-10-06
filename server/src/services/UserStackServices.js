const {
  UserStack,
  TestingResult,
  Stack,
  StackTask,
} = require("../../db/models");
const user = require("../../db/models/user");

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
        include: [
          {
            model: Stack,
            include: [
              {
                model: StackTask,
                attributes: [
                  "id",
                  "description",
                  "stackId",
                  "answer1",
                  "answer2",
                  "answer3",
                  "answer4",
                ],
              },
              {
                model: TestingResult,
                attributes: [
                  "id",
                  "userId",
                  "quantityCorrect",
                  "quantityTrue",
                  "quantityFalse",
                  "currentStackTaskId",
                ],
              },
            ],
            attributes: ["id", "title", "image"],
          },
        ],
      });
      console.log(userStacks.map((userStack) => userStack.get()));
      return userStacks ? userStacks.map((userStack) => userStack.get()) : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  // static getUserStackById = async (id) => {
  //   try {
  //     const userStack = await UserStack.findByPk(id);
  //     return userStack ? userStack.get() : null;
  //   } catch ({ message }) {
  //     console.log(message);
  //   }
  // };

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
