"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllExpenses = exports.deleteExpenseById = exports.deleteAllExpenses = exports.AddExpenses = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const Expense = _models.default.expenses;
const Amount = _models.default.amounts;

// Add expenses
const AddExpenses = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const {
      description,
      amount
    } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const expenses = await Expense.findAll();
    let totalExpense = 0;
    for (const expense of expenses) {
      totalExpense += parseInt(expense.amount);
    }
    totalExpense += parseInt(amount);
    const expense = await Expense.create({
      description,
      amount,
      UserId: user.id,
      TotalExpense: totalExpense,
      creatorName: user.first_name,
      // Assign creatorName
      category: "Expense" // Assign category
    });

    // Save TotalExpense into the Amount table
    const existingAmount = await Amount.findOne();
    if (existingAmount) {
      // Update ExpenseAmount
      await existingAmount.update({
        ExpenseAmount: totalExpense
      });
    } else {
      await Amount.create({
        ExpenseAmount: totalExpense
      });
    }
    return res.status(201).json({
      message: "New expense added",
      expense: {
        description: expense.description,
        amount: expense.amount,
        UserId: expense.UserId,
        TotalExpense: expense.TotalExpense,
        creatorName: expense.creatorName,
        // Confirm that creatorName is being saved
        category: expense.category // Confirm that category is being saved
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

// Get all expenses
exports.AddExpenses = AddExpenses;
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    return res.status(200).json({
      expenses
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.getAllExpenses = getAllExpenses;
const deleteExpenseById = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    // Find expense
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }
    // Get total expense before deleting
    const totalExpense = expense.TotalExpense;

    // Delete expense
    await expense.destroy();

    // Update total expense 
    const amount = await Amount.findOne();
    await amount.update({
      ExpenseAmount: totalExpense - expense.amount
    });
    res.status(200).json({
      message: "Expense deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete all expenses
exports.deleteExpenseById = deleteExpenseById;
const deleteAllExpenses = async (req, res) => {
  try {
    // Delete all expenses
    await Expense.destroy({
      truncate: false
    });

    // Reset total expense to 0
    const amount = await Amount.findOne();
    await amount.update({
      ExpenseAmount: 0
    });
    res.status(200).json({
      message: "All expenses deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
exports.deleteAllExpenses = deleteAllExpenses;