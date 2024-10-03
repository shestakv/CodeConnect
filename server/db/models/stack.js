"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stack extends Model {
    static associate(models) {
      this.hasMany(models.StackTask, { foreignKey: "stackId" });
      this.hasMany(models.UserStack, { foreignKey: "stackId" });
    }
  }
  Stack.init(
    {
      title: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Stack",
    }
  );
  return Stack;
};
