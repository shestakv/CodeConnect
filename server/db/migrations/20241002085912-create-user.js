"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      avatar: {
        defaultValue: "/images/defAvatar.png",
        type: Sequelize.TEXT,
      },
      surname: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT,
      },
      phone: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT,
      },
      patronymic: {
        type: Sequelize.TEXT,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.TEXT,
      },
      bio: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
