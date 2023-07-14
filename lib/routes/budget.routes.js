"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _createBudget = require("../controllers/budget/createBudget.Controller");
var _calculateRemainingBudget = require("../controllers/budget/calculateRemainingBudget.Controller");
var _getTotalBudget = _interopRequireDefault(require("../controllers/budget/getTotalBudget.Controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import {calculateRemainingAmount} from '../controllers/amount/Remaining.amount.js'

const BudgetRouter = _express.default.Router();
BudgetRouter.post('/addBudget', _createBudget.createBudget);
// BudgetRouter.post('/remaining' ,calculateRemainingAmount)
BudgetRouter.delete('/deletebudget/:id', _createBudget.deleteBudget);
BudgetRouter.get('/getBudget/:id', _createBudget.getBudgetById);
BudgetRouter.get('/getallBudget', _createBudget.getAllBudgets);
BudgetRouter.put('/updatebudget/:id', _createBudget.updateBudget);
BudgetRouter.get('/getAllTotalBudget', _getTotalBudget.default);
BudgetRouter.get('/calculateRemainingBudget', _calculateRemainingBudget.calculateRemainingBudget);
var _default = BudgetRouter;
exports.default = _default;