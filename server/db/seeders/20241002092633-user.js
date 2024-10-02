"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstname: "Arsen",
          surname: "Avanesyan",
          patronymic: "Igorevich",
          age: 30,
          phone: 89117755666,
          email:"01borzik@gmail.com",
          location:"Russia",
          bio:"Krasaycheg",
          password: await bcrypt.hash("123", 8),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
