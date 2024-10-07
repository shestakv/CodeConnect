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
          quantityCorrect: 13,
          quantityTrue: 0,
          quantityFalse: 13,
          currentStackTaskId: 1,
        },
        {
          userId: 1,
          stackId: 2,
          quantityCorrect: 0,
          quantityTrue: 0,
          quantityFalse: 0,
          currentStackTaskId: 1,
        },
        {
          userId: 1,
          stackId: 3,
          quantityCorrect: 0,
          quantityTrue: 0,
          quantityFalse: 0,
          currentStackTaskId: 1,
        },
        {
          userId: 1,
          stackId: 4,
          quantityCorrect: 0,
          quantityTrue: 0,
          quantityFalse: 0,
          currentStackTaskId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TestingResults", null, {});
  },
};
