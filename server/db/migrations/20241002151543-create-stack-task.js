"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StackTasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      stackId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      answer1: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      answer2: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      answer3: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      answer4: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      trueAnswer: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("StackTasks");
  },
};
