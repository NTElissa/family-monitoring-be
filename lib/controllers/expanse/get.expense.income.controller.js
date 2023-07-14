"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllThings = void 0;
var _express = _interopRequireDefault(require("express"));
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
const Income = _models.default.incomes;
const Expense = _models.default.expenses;

// Get all incomes and expenses
const getAllThings = async (req, res) => {
  try {
    const incomes = await Income.findAll();
    const expenses = await Expense.findAll();
    return res.status(200).json({
      incomes,
      expenses
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.getAllThings = getAllThings;