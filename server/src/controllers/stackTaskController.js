const StackTaskServices = require("../services/StackTaskServices");

exports.checkAnswer = async (req, res) => {
  try {
    const { id, answer } = req.body;
    console.log(id, answer);
    const stackTask = await StackTaskServices.getStackTaskById(id);
    console.log(stackTask);
    

    if (answer === stackTask.trueAnswer) {
      console.log("true");
      res.status(200).json({ result: true });
      return;
    } else {
      console.log("false");
      res.status(200).json({ result: false });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
