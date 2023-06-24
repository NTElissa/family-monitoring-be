"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _signup = require("../controllers/user/signup.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userRouter = _express.default.Router();
userRouter.post('/signup', _signup.createUser);
userRouter.get("/allusers", _signup.GetAllUsers);
userRouter.get("/one/:id", _signup.GetOneUser);
var _default = userRouter;
exports.default = _default;