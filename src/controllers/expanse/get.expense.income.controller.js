import express from 'express';
import db from '../../database/models';

const router = express.Router();


const Income = db.incomes;
const Expense = db.expenses;

// Get all incomes and expenses
const getAllThings = async (req, res) => {
  try {
    const incomes = await Income.findAll();
    const expenses = await Expense.findAll();

    return res.status(200).json({
      incomes,
      expenses,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { getAllThings };
