const {
  TestingResult,
  Stack,
  StackTask,
} = require("../../db/models");
const user = require("../../db/models/user");

class StackTaskServices {
  static getStackTaskById = async (id) => {
    try {
      const stackTask = await StackTask.findByPk(id);
      return stackTask ? stackTask.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = StackTaskServices;
