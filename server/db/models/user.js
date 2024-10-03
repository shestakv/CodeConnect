'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Company, { foreignKey: "userId" });
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
        defaultValue: "/images/defAvatar.png",
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
        type: DataTypes.TEXT,
      },
      patronymic: {
        type: DataTypes.TEXT,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      education: {
        type: DataTypes.TEXT,
      },
      workExperience: {
        type: DataTypes.TEXT,
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