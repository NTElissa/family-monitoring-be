"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpance = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const Expense = _models.default.expenses;
const getExpance = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    // First, we find the user based on the provided id
    const user = await User.findOne({
      where: {
        id
      }
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Then, we find all expenses associated with the user
    const expenses = await Expense.findAll({
      where: {
        id: id
      }
    });
    if (expenses.length === 0) {
      return res.status(404).json({
        message: "No expenses found for this user"
      });
    }

    // Next, we map the expenses to extract the required data
    const expenseAmounts = expenses.map(expense => ({
      expenseId: expense.id,
      amount: expense.amount ? expense.amount : 0
    }));
    return res.status(200).json({
      message: "Expense amounts retrieved successfully",
      userId: user.id,
      expenses: expenseAmounts
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.getExpance = getExpance;