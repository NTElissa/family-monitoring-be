'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Income.belongsTo(models.User ,{foreignKey:'UserId'})
      // Income.hasMany(models.Amount ,{foreignKey:'TotalAmount'})
      // define association here
    }
  }
  Income.init({
    UserId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    TotalIncome:DataTypes.FLOAT,
    creatorName:DataTypes.STRING,
    category:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Income',
  });
  return Income;
};