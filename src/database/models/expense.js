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
      Expense.belongsTo(models.User ,{foreignKey:'userId'})
      Expense.hasMany(models.Amount ,{foreignKey:'TotalAmount'})
      // Expense.hasMany(models.Budget,{foreignKey:'RemaingBudget'})
      Expense.belongsTo(models.Budget, {foreignKey:"budgetId"})
      // define association here
    }
  }
  Expense.init({
    userId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    TotalExpense:DataTypes.FLOAT,
    starting_balance: DataTypes.STRING,
    current_balance: DataTypes.STRING,
    budgetId:DataTypes.INTEGER 
    

  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};