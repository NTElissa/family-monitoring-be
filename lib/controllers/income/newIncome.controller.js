"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const Income = _models.default.incomes;
const Amount = _models.default.amounts;
const newIncome = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const {
      discription,
      amount
    } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const incomes = await Income.findAll();
    let totalIncome = 0;
    for (const income of incomes) {
      totalIncome += income.amount;
    }
    totalIncome += amount;
    const income = await Income.create({
      discription,
      amount,
      UserId: user.id,
      TotalIncome: totalIncome
    });
    // Save TotalIncome into the Amount table
    // Check if Amount record exists
    const existingAmount = await Amount.findOne();
    if (existingAmount) {
      // Update TotalAmount
      await existingAmount.update({
        TotalAmount: totalIncome
      });
    } else {
      await Amount.create({
        TotalAmount: totalIncome
      });
    }
    return res.status(201).json({
      message: "New income added",
      income
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
var _default = newIncome;
exports.default = _default;