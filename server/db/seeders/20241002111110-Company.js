'use strict';

const bcrypt = require("bcrypt");
const user = require("../models/user");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          userId: 1,
          name: "Elbrus",
          email: "elbrus@gmail.vom",
          phone: "84999386824",
          description: "Топ место",
          logo: "/images/Elbrus.png",
        },
        {
          userId: 2,
          name: "TechSolutions",
          email: "techsolutions@gmail.com",
          phone: "84991234567",
          description: "Инновационные решения в области ИТ.",
          logo: "/images/TechSolutions.webp",
        },
        {
          userId: 3,
          name: "WebMasters",
          email: "webmasters@gmail.com",
          phone: "84992345678",
          description: "Специализируемся на фронтенд разработке.",
          logo: "/images/WebMasters.jpg",
        },
        {
          userId: 8,
          name: "FutureTech",
          email: "futuretech@gmail.com",
          phone: "84997890123",
          description: "Технологии будущего для вашего бизнеса.",
          logo: "/images/defCompanyAvatar.jpeg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
