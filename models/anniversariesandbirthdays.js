"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AnniversariesAndBirthdays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnniversariesAndBirthdays.init(
    {
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
      },
      date_of_joining: {
        type: Sequelize.DATEONLY,
      },
      wedding_anniversary: {
        type: Sequelize.DATEONLY,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "AnniversariesAndBirthdays",
      tableName: "anniversaries_and_birthdays",
    }
  );
  return AnniversariesAndBirthdays;
};
