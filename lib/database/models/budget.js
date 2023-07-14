"use strict";

const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Budget.belongsTo(models.Expense ,{foreignKey:'RemaingBudget'})
      Budget.hasMany(models.Expense, {
        foreignKey: "budgetId"
      });
      // define association here
    }
  }

  Budget.init({
    description: DataTypes.STRING,
    RemaingBudget: DataTypes.FLOAT,
    TotalBudget: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: "Budget"
  });
  return Budget;
};