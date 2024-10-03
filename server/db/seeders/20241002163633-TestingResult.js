"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TestingResults",
      [
        {
          userId: 1,
          stackId: 1,
          quantityCorrect: 0,
          quantityTrue: 0,
          quantityFalse: 0,
          currentStackId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TestingResults", null, {});
  },
};
