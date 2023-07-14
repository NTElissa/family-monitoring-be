"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddExpenses = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const Expense = _models.default.expenses;
const Amount = _models.default.amounts;
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
      totalExpense += expense.amount;
    }
    totalExpense += amount;
    const expense = await Expense.create({
      description,
      amount,
      UserId: user.id,
      TotalExpense: totalExpense
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
      expense
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.AddExpenses = AddExpenses;