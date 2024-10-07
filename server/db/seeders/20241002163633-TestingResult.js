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
          quantityCorrect: 17,
          quantityTrue: 13,
          quantityFalse: 4,
          currentStackTaskId: 16,
        },
        {
          userId: 1,
          stackId: 2,
          quantityCorrect: 14,
          quantityTrue: 10,
          quantityFalse: 4,
          currentStackTaskId: 13,
        },
        {
          userId: 1,
          stackId: 3,
          quantityCorrect: 15,
          quantityTrue: 10,
          quantityFalse: 5,
          currentStackTaskId: 14,
        },
        {
          userId: 1,
          stackId: 4,
          quantityCorrect: 13,
          quantityTrue: 10,
          quantityFalse: 3,
          currentStackTaskId: 12,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TestingResults", null, {});
  },
};
