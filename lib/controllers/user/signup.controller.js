"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.GetOneUser = exports.GetAllUsers = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// create user
const User = _models.default.users;
const createUser = async (req, res) => {
  try {
    const {
      fullname,
      email,
      password
    } = req.body;
    const user = await User.create({
      fullname,
      email,
      password
    });
    return res.status(201).json({
      message: "user created",
      user
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.createUser = createUser;
const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({
      message: "All users",
      data: users
    });
  } catch (error) {
    console.log(error);
  }
};
exports.GetAllUsers = GetAllUsers;
const GetOneUser = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const oneuser = await User.findOne({
      where: {
        id: id
      }
    });
    res.status(200).send({
      message: "this is one user",
      data: oneuser
    });
  } catch (error) {}
};
exports.GetOneUser = GetOneUser;