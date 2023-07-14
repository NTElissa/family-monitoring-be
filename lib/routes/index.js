"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _user = _interopRequireDefault(require("./user.routes"));
var _expense = _interopRequireDefault(require("./expense.routes"));
var _loginRoutes = _interopRequireDefault(require("./login.routes.js"));
var _incomeRoutes = _interopRequireDefault(require("./income.routes.js"));
var _budget = _interopRequireDefault(require("./budget.routes"));
var _messageRouter = _interopRequireDefault(require("./message.router.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use("/user", _user.default);
router.use("/expense", _expense.default);
router.use("/login", _loginRoutes.default);
router.use("/income", _incomeRoutes.default);
router.use("/family", _budget.default);
router.use("/message", _messageRouter.default);
var _default = router;
exports.default = _default;