"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserStack extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Stack, { foreignKey: "stackId" });
    }
  }
  UserStack.init(
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
      grade: {
        defaultValue: 1,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "UserStack",
    }
  );
  return UserStack;
};
