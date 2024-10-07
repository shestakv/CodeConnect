const UserStackServices = require("../services/UserStackServices");

exports.getAllUserStacks = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId)

    const userStacks = await UserStackServices.getAllUserStacks(userId);
    res.status(200).json({ message: "success", userStacks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.getUserStackById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const userStack = await UserStackServices.getUserStackById(id);
//     if (userStack) {
//       res.status(200).json({ message: "success", userStack });
//     } else {
//       res.status(404).json({ message: "UserStack not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.createUserStack = async (req, res) => {
  try {
    const { stackId, grade = 0 } = req.body;

    const userStack = await UserStackServices.createUserStack({
      userId: res.locals.user.id,
      stackId,
      grade,
    });

    res.status(201).json({ message: "success", userStack });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUserStack = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;

    let userStack = await UserStackServices.getUserStackById(id);
    if (userStack) {
      await UserStackServices.deleteUserStack(id, userId);
      res.status(200).json({ message: "success" });
    } else {
      res.status(404).json({ message: "UserStack not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
