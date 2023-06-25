"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _login = require("../controllers/user/login.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UserRouter = _express.default.Router();
UserRouter.post('/use/login', _login.Login);
UserRouter.post('/use/logout', _login.Logout);
var _default = UserRouter;
exports.default = _default;