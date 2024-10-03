'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Company.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT
    },
    phone: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    logo: {
      defaultValue: "/defAvatar.png",
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};