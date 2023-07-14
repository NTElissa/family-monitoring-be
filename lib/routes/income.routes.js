"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _newIncome = require("../controllers/income/newIncome.controller");
var _getuser = require("../controllers/income/getuser.income");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const IncomeRouter = _express.default.Router();
IncomeRouter.post("/income/:id", _newIncome.newIncome);
IncomeRouter.get("/get/income/:id", _getuser.getIncome);
IncomeRouter.get("/getAllIncomes", _newIncome.getAllIncomes);
IncomeRouter.delete("/deleteIncomeOne/:id", _newIncome.deleteIncomeById);
IncomeRouter.delete("/deleteAllIncome", _newIncome.deleteAllIncomes);
var _default = IncomeRouter;
exports.default = _default;