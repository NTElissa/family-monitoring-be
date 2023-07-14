"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Expenses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.STRING,
      },

      description: {
        type: Sequelize.STRING,
      },

      amount: {
        type: Sequelize.FLOAT,
      },
      creatorName:{
        type:Sequelize.STRING
      },

      category:{
        type:Sequelize.STRING
      },

      date: {
        type: Sequelize.DATE,
      },
      TotalExpense: {
        type: Sequelize.FLOAT,
      },
       budgetId:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Expenses");
  },
};
