"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Budget = _models.default.Budgets;
const getTotalBudget = async (req, res) => {
  try {
    // Retrieve all budgets from the database
    const budgets = await Budget.findAll();

    // Calculate the total amount from all budgets
    let totalAmount = 0;
    budgets.forEach(budget => {
      totalAmount += budget.TotalBudget;
    });
    return res.status(200).json({
      totalAmount,
      budgets
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
var _default = getTotalBudget;
exports.default = _default;