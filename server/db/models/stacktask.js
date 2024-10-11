"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StackTask extends Model {
    static associate(models) {
      this.belongsTo(models.Stack, { foreignKey: "stackId" });
    }
  }
  StackTask.init(
    {
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      stackId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Stacks",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      answer1: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer2: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer3: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer4: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      trueAnswer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "StackTask",
    }
  );
  return StackTask;
};
