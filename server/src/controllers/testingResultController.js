const TestingResultServices = require("../services/TestingResultServices");


exports.getAllTestingResults = async (req, res) => {
  try {
    const testingResults = await TestingResultServices.getAllTestingResults(req.query);
    res.status(200).json({ message: "success", testingResults });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTestingResultById = async (req, res) => {
  try {
    const { id } = req.params;
    const testingResult = await TestingResultServices.getTestingResultById(id);
    if (testingResult) {
      res.status(200).json({ message: "success", testingResult });
    } else {
      res.status(404).json({ message: "Testing Result not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTestingResult = async (req, res) => {
  try {
    const { name, email, phone, description, logo } = req.body;

    const testingResult = await TestingResultServices.createTestingResult({
      userId: res.locals.user.id,
      name,
      email,
      phone,
      description,
      logo
    });

    res.status(201).json({ message: "success", testingResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTestingResultId = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, description, logo} = req.body;

    let testingResult = await TestingResultServices.getTestingResultById(id);

    if (testingResult) {
        testingResult = await TestingResultServices.updateTestingResult({
        id,
        userId: res.locals.user.id,
        name,
        email,
        phone,
        description,
        logo
      });
      res.status(200).json({ message: "success", testingResult });
    } else {
      res.status(404).json({ message: "Testing Result not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTestingResult = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;
    
    let testingResult = await TestingResultServices.getTestingResultById(id);
    if (testingResult) {
      await TestingResultServices.deleteTestingResult(id, userId);
      res.status(200).json({ message: "success" });
    } else {
      res.status(404).json({ message: "Testing Result not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};