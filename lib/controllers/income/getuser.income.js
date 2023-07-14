"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIncome = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const Income = _models.default.incomes;
const getIncome = async (req, res) => {
  const {
    id
  } = req.params;
  try {
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

    // Then, we find all incomes associated with the user (previously expenses)
    const incomes = await Income.findAll({
      where: {
        id: id
      }
    });
    if (incomes.length === 0) {
      return res.status(404).json({
        message: "No incomes found for this user"
      });
    }

    // Next, we map the incomes to extract the required data
    const incomeAmounts = incomes.map(income => ({
      incomeId: income.id,
      amount: income.amount ? income.amount : 0
    }));
    return res.status(200).json({
      message: "Income amounts retrieved successfully",
      userId: user.id,
      incomes: incomeAmounts
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.getIncome = getIncome;