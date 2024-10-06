"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TestingResult extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Stack, { foreignKey: "stackId" });
    }
  }
  TestingResult.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
      quantityCorrect: {
        type: DataTypes.INTEGER,
      },
      quantityTrue: {
        type: DataTypes.INTEGER,
      },
      quantityFalse: {
        type: DataTypes.INTEGER,
      },
      currentStackTaskId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "TestingResult",
    }
  );
  return TestingResult;
};
