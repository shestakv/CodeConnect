const { where } = require("sequelize");
const { Company } = require("../../db/models");


class CompanyServices {
  static createCompany = async ({
    userId,
    name,
    email,
    phone,
    description,
    logo
  } = {}) => {
    try {
      const company = await Company.create({
        userId,
        name,
        email,
        phone,
        description,
        logo,
      });
      console.log("Компания создана");
      return company.get();
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getAllCompanies = async query => {
    try{
    const companies = await Company.findAll({where: query});
    return companies ? companies.map((company) => company.get()) : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getCompanyById = async (id) => {
    try{
    const company = await Company.findByPk(id);
    console.log(company.get());
    
    return company ? company.get() : null;
    } catch ({ message }) {
    console.log(message);
    }
  };

  static getCompanyByEmail = async (email) => {
    try{
    const company = await Company.findOne({where: email});
    return company ? company.get() : null;
    } catch ({ message }) {
    console.log(message);
    }
  };

  static async updateLogo(id, logoPath) {
    const company = await Company.findByPk(id);
    if (!company) {
      throw new Error("Компания не найдена");
    }
    company.logo = logoPath;
    console.log("Логотип компании обновлен:", company);
    
    await company.save();
    return company;
  }


  static updateCompany = async (data) => {
    const { id, userId, name, email, phone, description, logo } =
      data;
      
    const company = await Company.findOne({ where: { id, userId } });    
    if (company) {
      return company.update({
        userId,
        name,
        email,
        phone,
        description,
        logo
      });
    }
    return null;
  };

  

  static deleteCompany = async (id, userId) => {
    try {
      const company = await Company.destroy({ where: { id, userId } });
      return company;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = CompanyServices;