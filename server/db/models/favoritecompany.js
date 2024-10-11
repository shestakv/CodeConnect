"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FavoriteCompany extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });
    }
  }

  FavoriteCompany.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Companies",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "FavoriteCompany",
    }
  );

  return FavoriteCompany;
};
