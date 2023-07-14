'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expense.belongsTo(models.User, {
        foreignKey: 'UserId'
      });
      Expense.hasMany(models.Amount, {
        foreignKey: 'TotalAmount'
      });
      // Expense.hasMany(models.Budget,{foreignKey:'ExpenseAmount'})
      Expense.belongsTo(models.Budget, {
        foreignKey: "budgetId"
      });
      // define association here
    }
  }

  Expense.init({
    UserId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    TotalExpense: DataTypes.FLOAT,
    budgetId: DataTypes.INTEGER,
    creatorName: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Expense'
  });
  return Expense;
};