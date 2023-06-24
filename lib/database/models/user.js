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
    static associate(models) {}
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue('fullname', val.toLowerCase());
      }
    },
    email: {
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue('email', val.toLowerCase());
      }
    },
    image: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    mfa_secret: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue('gender', val.toLowerCase());
      }
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2
      // Admin(1), teacher(2)
    },

    accountStatus: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    },
    lastPasswordUpdate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
    getterMethods: {
      mfa_token() {
        if (this.mfa_secret) {
          return speakeasy.totp({
            secret: this.mfa_secret,
            encoding: 'base32'
          });
        }
        return null;
      }
    }
  });
  return User;
};