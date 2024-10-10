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
          quantityTrue: 7,
          quantityFalse: 4,
          currentStackTaskId: 12,
        },
        {
          userId: 1,
          stackId: 2,
          quantityTrue: 9,
          quantityFalse: 8,
          currentStackTaskId: 18,
        },
        {
          userId: 1,
          stackId: 3,
          quantityTrue: 10,
          quantityFalse: 5,
          currentStackTaskId: 16,
        },
        {
          userId: 1,
          stackId: 4,
          quantityTrue: 20,
          quantityFalse: 0,
          currentStackTaskId: 21,
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
