"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.GetOneUser = exports.GetAllUsers = exports.DeleteUser = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const createUser = async (req, res) => {
  try {
    const {
      first_name,
      email,
      password
    } = req.body;

    // Hash the password
    const hashedPassword = await _bcrypt.default.hash(password, 10);

    // Check if the user already exists
    const existingUser = await User.findOne({
      where: {
        email
      }
    });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }
    const user = await User.create({
      first_name,
      email,
      password: hashedPassword // Store the hashed password
    });

    return res.status(201).json({
      message: "User created",
      user
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
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
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.GetAllUsers = GetAllUsers;
const GetOneUser = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id
      }
    });
    if (user) {
      return res.status(200).json({
        message: "User found",
        data: user
      });
    } else {
      return res.status(404).json({
        message: "User not found"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.GetOneUser = GetOneUser;
const DeleteUser = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id
      }
    });
    if (user) {
      await User.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({
        message: "User deleted"
      });
    } else {
      return res.status(404).json({
        message: "User not found"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.DeleteUser = DeleteUser;