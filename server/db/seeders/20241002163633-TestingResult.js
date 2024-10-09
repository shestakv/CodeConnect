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
          quantityTrue: 13,
          quantityFalse: 4,
          currentStackTaskId: 16,
        },
        {
          userId: 1,
          stackId: 2,
          quantityTrue: 10,
          quantityFalse: 4,
          currentStackTaskId: 13,
        },
        {
          userId: 1,
          stackId: 3,
          quantityTrue: 10,
          quantityFalse: 5,
          currentStackTaskId: 14,
        },
        {
          userId: 1,
          stackId: 4,
          quantityTrue: 10,
          quantityFalse: 3,
          currentStackTaskId: 12,
        },
        {
          userId: 1,
          stackId: 5,
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
