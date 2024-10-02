'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init(
    {
      firstname: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      surname: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      avatar: {
      defaultValue: "/defAvatar.png",
      type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        unique: true,
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      patronymic: {
        type: DataTypes.TEXT,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      location: {
        type: DataTypes.TEXT,
      },
      bio: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};