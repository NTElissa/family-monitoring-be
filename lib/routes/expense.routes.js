"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _expance = require("../controllers/expanse/expance.controller");
var _getuser = require("../controllers/expanse/getuser.expanse");
var _getAmount = require("../controllers/amount/get.amount.expense");
var _getExpenseIncome = require("../controllers/expanse/get.expense.income.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ExpenseRouter = _express.default.Router();
ExpenseRouter.post('/add/expense/:id', _expance.AddExpenses);
ExpenseRouter.get('/getAllExpenses', _expance.getAllExpenses);
ExpenseRouter.get('/get/expense/:id', _getuser.getExpance);
ExpenseRouter.get('/allexpense', _getAmount.AllgetExpense);
ExpenseRouter.get('/getAllThings', _getExpenseIncome.getAllThings);
ExpenseRouter.delete('/deleteExpanse/:id', _expance.deleteExpenseById);
ExpenseRouter.delete('/deleteAllExpanse', _expance.deleteAllExpenses);
var _default = ExpenseRouter;
exports.default = _default;