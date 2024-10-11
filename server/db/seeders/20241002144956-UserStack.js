"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserStacks",
      [
        {
          userId: 1,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 1,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 1,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 1,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 1,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 2,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 2,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 2,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 2,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 2,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 3,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 3,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 3,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 3,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 3,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 4,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 4,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 4,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 4,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 4,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 5,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 5,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 5,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 5,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 5,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 6,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 6,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 6,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 6,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 6,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 7,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 7,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 7,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 8,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 8,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 8,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 9,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 9,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 10,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 10,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 10,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 11,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 11,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 11,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 11,
          stackId: 4,
          grade: 4,
        },
        {
          userId: 11,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 12,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 12,
          stackId: 3,
          grade: 7,
        },
        {
          userId: 12,
          stackId: 5,
          grade: 0,
        },
        {
          userId: 13,
          stackId: 1,
          grade: 6,
        },
        {
          userId: 13,
          stackId: 2,
          grade: 9,
        },
        {
          userId: 13,
          stackId: 3,
          grade: 7,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserStacks", null, {});
  },
};
