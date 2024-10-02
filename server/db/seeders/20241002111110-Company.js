'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          name: "Elbrus",
          email: "elbrus@gmail.vom",
          password: await bcrypt.hash("123", 8),
          phone: 84999386824,
          description: 'Топ место',
          logo: "defAvatar.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};

