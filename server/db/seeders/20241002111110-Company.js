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
          userId: 1,
          email: "elbrus@gmail.vom",
          phone: '84999386824',
          description: 'Топ место',
          logo: "/images/defAvatar.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};

