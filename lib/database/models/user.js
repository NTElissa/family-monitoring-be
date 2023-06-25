'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Expense, {
        foreignKey: 'userId'
      });
      User.hasMany(models.Income, {
        foreignKey: 'userId'
      });
      // define association here
    }
  }

  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    positionId: DataTypes.STRING,
    location: DataTypes.STRING,
    job: DataTypes.STRING,
    otherFields: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};