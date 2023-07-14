"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _expance = require("../controllers/expanse/expance.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ExpenseRouter = _express.default.Router();
ExpenseRouter.post('/add/expense/:id', _expance.AddExpenses);
var _default = ExpenseRouter;
exports.default = _default;