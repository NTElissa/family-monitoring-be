"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRemainingBudget = exports.calculateRemainingBudget = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Budget = _models.default.Budgets;
const Expense = _models.default.expenses;
const calculateRemainingBudget = async (req, res) => {
  try {
    // Retrieve all budgets from the database
    const budgets = await Budget.findAll();

    // Calculate the total amount from all budgets
    let totalBudget = 0;
    budgets.forEach(budget => {
      totalBudget += budget.TotalBudget;
    });

    // Retrieve all expenses from the database
    const expenses = await Expense.findAll();

    // Calculate the total amount from all expenses
    let totalExpense = 0;
    expenses.forEach(expense => {
      totalExpense += expense.amount;
    });

    // Calculate remaining budget
    const remainingBudget = totalBudget - totalExpense;
    console.log("response", remainingBudget);
    return res.status(200).json({
      totalAmount: remainingBudget // Update the key to match the response structure
    });
  } catch (error) {
    console.log(error.message);
    throw new Error("Error calculating remaining budget");
  }
};
exports.calculateRemainingBudget = calculateRemainingBudget;
const updateRemainingBudget = async (req, res) => {
  try {
    // Calculate remaining budget
    const {
      totalAmount
    } = await calculateRemainingBudget(); // Destructure totalAmount

    // Update remaining budget in the Budget table
    const budgets = await Budget.findAll();
    for (const budget of budgets) {
      await budget.update({
        RemaingBudget: totalAmount // Use totalAmount here
      });
    }

    return res.status(200).json({
      totalAmount // Update the key to match the response structure
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.updateRemainingBudget = updateRemainingBudget;