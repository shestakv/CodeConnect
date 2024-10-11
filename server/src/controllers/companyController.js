const CompanyServices = require("../services/CompanyServices");
const { processImages } = require("../utils/upload");

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
      res.status(404).json({ message: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const { name, email, phone, description, logo } = req.body;
    const findCompany = await CompanyServices.getCompanyByEmail({
      email,
    });
    if (findCompany) {
      return res.status(400).json({ message: "Такая компания уже существует!" });
    }
    const company = await CompanyServices.createCompany({
      userId: res.locals.user.id,
      name,
      email,
      phone,
      description,
      logo,
    });

    res.status(201).json({ message: "success", company });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCompanyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, description, logo } = req.body;

    let company = await CompanyServices.getCompanyById(id);

    if (company) {
      company = await CompanyServices.updateCompany({
        id,
        userId: res.locals.user.id,
        name,
        email,
        phone,
        description,
        logo,
      });
      res.status(200).json({ message: "success", company });
    } else {
      res.status(404).json({ message: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCompanyLogo = async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { id } = req.params;
    if (!req.file) {
      return res.status(400).json({ message: "Файл не загружен" });
    }

    const logoPath = await processImages(req.file.buffer);

    const company = await CompanyServices.getCompanyById(id);
    
    if (!company) {
      return res.status(404).json({ message: "Компания не найдена" });
    }
console.log(logoPath);

    const updatedCompany = await CompanyServices.updateLogo(id, `/images/${logoPath}`);
    console.log("Логотип компании обновлен:", updatedCompany);
    res.status(200).json({ company: updatedCompany });
  } catch (error) {
    console.error("Ошибка при обновлении логотипа компании:", error);
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;

    let company = await CompanyServices.getCompanyById(id);

    if (company) {
      company = await CompanyServices.deleteCompany(id, userId);
      res.status(200).json({ message: "success" });
    } else {
      res.status(404).json({ message: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({ error: message });
  }
};
