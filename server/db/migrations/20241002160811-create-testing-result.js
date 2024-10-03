"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TestingResults", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      stackId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantityCorrect: {
        type: Sequelize.INTEGER,
      },
      quantityTrue: {
        type: Sequelize.INTEGER,
      },
      quantityFalse: {
        type: Sequelize.INTEGER,
      },
      currentStackId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("TestingResults");
  },
};
