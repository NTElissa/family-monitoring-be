"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = exports.Login = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const Login = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;

    // Find the user based on the email
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await _bcrypt.default.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // Generate a token
    const token = _jsonwebtoken.default.sign({
      userId: user.id
    }, "your-secret-key", {
      expiresIn: "1h"
    });
    return res.status(200).json({
      message: "Login successful",
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.Login = Login;
const Logout = (req, res) => {
  try {
    res.clearCookie('jwt');
    // Send success response
    res.status(200).json({
      message: 'Logout successful'
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    // Send error response
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};
exports.Logout = Logout;