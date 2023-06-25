"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _newIncome = _interopRequireDefault(require("../controllers/income/newIncome.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const IncomeRouter = _express.default.Router();
IncomeRouter.post("/income/:id", _newIncome.default);
var _default = IncomeRouter;
exports.default = _default;