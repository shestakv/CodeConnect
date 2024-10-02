const CompanyServices = require("../services/CompanyServices");


exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await CompanyServices.getAllCompanies(req.query);
    res.status(200).json({ message: "success", companies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await CompanyServices.getCompanyById(id);
    if (company) {
      res.status(200).json({ message: "success", company });
    } else {
      res.status(404).json({ message: "Weather not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const { name, email, phone, description, logo } = req.body;

    const company = await CompanyServices.createCompany({
      userId: res.locals.user.id,
      name,
      email,
      phone,
      description,
      logo
    });

    res.status(201).json({ message: "success", company });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCompanyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, description, logo} = req.body;

    let company = await CompanyServices.getCompanyById(id);

    if (company) {
        company = await CompanyServices.updateCompany({
        id,
        userId: res.locals.user.id,
        name,
        email,
        phone,
        description,
        logo
      });
      res.status(200).json({ message: "success", company });
    } else {
      res.status(404).json({ message: "Weather not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;
    
    let company = await CompanyServices.getCompanyById(id);
    if (company) {
      await CompanyServices.deleteCompany(id, userId);
      res.status(200).json({ message: "success" });
    } else {
      res.status(404).json({ message: "Weather not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};