"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllgetExpense = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Corrected code

const Amount = _models.default.amounts;
const AllgetExpense = async (req, res) => {
  try {
    const expenses = await Amount.findAll();
    return res.status(200).json({
      message: "All expense amount",
      data: expenses
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.AllgetExpense = AllgetExpense;