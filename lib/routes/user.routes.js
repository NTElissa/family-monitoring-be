"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _signup = require("../controllers/user/signup.controller");
var _updateProfile = require("../controllers/user/updateProfile.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userRouter = _express.default.Router();
userRouter.post('/signup', _signup.createUser);
userRouter.get("/allusers", _signup.GetAllUsers);
userRouter.get("/one/:id", _signup.GetOneUser);
userRouter.delete("/deleteUser/:id", _signup.DeleteUser);
userRouter.put("/profile/:id", _updateProfile.updateUserProfile);
var _default = userRouter;
exports.default = _default;