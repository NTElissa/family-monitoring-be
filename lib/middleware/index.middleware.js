"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parent = exports.isAdmin = exports.child = exports.checkPermission = void 0;
var _index = _interopRequireDefault(require("../database/models/index.js"));
var _jwt = _interopRequireDefault(require("../utils/jwt.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable */

_dotenv.default.config();
const isAdmin = async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({
      message: req.t('Token_not_provided')
    }); // assuming the token is sent in the Authorization header
  }

  const token = authheader.split(" ")[1];
  const {
    id
  } = req.params;
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await _index.default.User.findOne({
      where: {
        id: decodedToken.value.id
      }
    });
    if (user && decodedToken && decodedToken.value.positionId === 0) {
      req.user = user;
      next();
    } else {
      res.status(403).json({
        message: req.t('Not_authorized')
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: req.t('Not_authorized')
    });
  }
};
exports.isAdmin = isAdmin;
const parent = async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({
      message: req.t('Token_not_provided')
    }); // assuming the token is sent in the Authorization header
  }

  const token = authheader.split(" ")[1];
  const {
    id
  } = req.params;
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await _index.default.User.findOne({
      where: {
        id: decodedToken.value.id
      }
    });
    if (user && decodedToken && decodedToken.value.positionId === 1) {
      req.user = user;
      next();
    } else {
      res.status(403).json({
        message: req.t('Not_authorized')
      });
    }
  } catch (err) {
    res.status(500).json({
      message: req.t('Not_authorized')
    });
    console.log(err);
  }
};
exports.parent = parent;
const child = async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({
      message: req.t('Token_not_provided')
    }); // assuming the token is sent in the Authorization header
  }

  const token = authheader.split(' ')[1];
  const {
    id
  } = req.params;
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await _index.default.User.findOne({
      where: {
        id: decodedToken.value.id
      }
    });
    if (user && decodedToken && decodedToken.value.positionId === 2) {
      req.user = user;
      next();
    } else {
      res.status(403).json({
        message: req.t('Not_authorized')
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: req.t('server_error')
    });
  }
};
exports.child = child;
const checkPermission = permission => async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({
      message: req.t("Token_not_provided")
    }); // assuming the token is sent in the Authorization header
  }

  const token = authheader.split(" ")[1];
  // const { id } = req.params;
  const permissions = {
    0: ['manage users', 'manage expanse', 'view expence'],
    1: ['manage expance', 'view expence'],
    2: ['view expence']
  };
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await _index.default.User.findOne({
      where: {
        id: decodedToken.value.id
      }
    });
    const positionId = decodedToken.value.positionId;
    if (user && permissions[positionId]?.includes(permission)) {
      next();
    } else {
      // next();
      res.status(403).json({
        message: req.t('Not_authorized')
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: req.t('server_error')
    });
  }
};
exports.checkPermission = checkPermission;