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
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      stackId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Stacks",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      quantityTrue: {
        type: Sequelize.INTEGER,
      },
      quantityFalse: {
        type: Sequelize.INTEGER,
      },
      currentStackTaskId: {
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
