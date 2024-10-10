const TestingResultServices = require("../services/TestingResultServices");
const UserStackServices = require("../services/UserStackServices");
const {
  deleteTestingResult,
  createTestingResult,
} = require("./testingResultController");

exports.getAllUserStacks = async (req, res) => {
  try {
    const { userId } = req.params;

    const userStacks = await UserStackServices.getAllUserStacks(userId);
    res.status(200).json({ message: "success", userStacks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUserStack = async (req, res) => {
  try {
    const { stackId, grade = 1 } = req.body;
    console.log(stackId, grade);
    const userId = res.locals.user.id;

    const userStack = await UserStackServices.createUserStack({
      userId,
      stackId,
      grade,
    });
    await createTestingResult({ stackId, userId });
    if (userStack) {
      const newUserStack = await UserStackServices.getUserStackById(
        userStack.id
      );
      console.log(newUserStack);
      res.status(201).json({ message: "success", userStack: newUserStack });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUserStack = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;
    let userStack = await UserStackServices.getOneUserStackById(id);
    if (userStack) {
      await deleteTestingResult({ userId, stackId: userStack.stackId });
      await UserStackServices.deleteUserStack(id, userId);
      res.status(200).json({ message: "success" });
    } else {
      res.status(404).json({ message: "UserStack not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
