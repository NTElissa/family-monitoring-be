"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddExpenses = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Expense,
  User
} = _models.default;
const AddExpenses = async (req, res) => {
  try {
    const {
      userId,
      date,
      description,
      amount
    } = req.body;
    const user = await User.findOne({
      where: {
        id: userId
      }
    });
    if (!user) {
      res.status(404).json({
        message: `user with is ${userId} is not found`
      });
    }
    const expense = await Expense.create({
      userId,
      date,
      description,
      amount
    });
    res.status(200).send({
      message: "Expense created successfully",
      data: expense
    });
  } catch (error) {
    console.log(error);
  }
};
exports.AddExpenses = AddExpenses;