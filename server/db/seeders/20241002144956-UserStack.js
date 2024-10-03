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
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserStacks", null, {});
  },
};
