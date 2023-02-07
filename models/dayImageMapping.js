"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DayImageMapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DayImageMapping.init(
    {
      day: {
        type: Sequelize.INTEGER,
      },
      month: {
        type: Sequelize.INTEGER,
      },
      birthday_url: {
        type: Sequelize.TEXT,
      },
      work_anniversary_url: {
        type: Sequelize.TEXT,
      },
      marriage_anniversary_url: {
        type: Sequelize.TEXT,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "DayImageMapping",
      tableName: "day_image_mapping",
    }
  );
  return DayImageMapping;
};
