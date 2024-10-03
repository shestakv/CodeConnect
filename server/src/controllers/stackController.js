const StackServices = require("../services/StackServices");

exports.getAllStacks = async (req, res) => {
  try {
    const stacks = await StackServices.getAllStacks(req.query);
    res.status(200).json({ message: "success", stacks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStackById = async (req, res) => {
  try {
    const { id } = req.params;
    const stack = await StackServices.getStackById(id);
    if (stack) {
      res.status(200).json({ message: "success", stack });
    } else {
      res.status(404).json({ message: "Stack not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
