const { Stack, StackTask } = require("../../db/models");

class StackServices {
  static getAllStacks = async (query) => {
    try {
      const stacks = await Stack.findAll({
        where: query,
        include: {
          model: StackTask,
          attributes: [
            "description",
            "stackId",
            "answer1",
            "answer2",
            "answer3",
            "answer4",
          ],
        },
      });
      return stacks ? stacks.map((stack) => stack.get()) : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getStackById = async (id) => {
    try {
      const stack = await Stack.findByPk(id);
      return stack ? stack.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = StackServices;
