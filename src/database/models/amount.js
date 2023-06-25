'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Amount.belongsTo(models.Expense, {foreignKey:'TotalAmount'})
      // Amount.belongsTo(models.Income ,{foreignKey:'TotalAmount'})
      // define association here
    }
  }
  Amount.init({
    amount: DataTypes.FLOAT,
    TotalAmount:DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Amount',
  });
  return Amount;
};