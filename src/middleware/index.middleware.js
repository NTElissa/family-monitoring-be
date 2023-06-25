/* eslint-disable */
import db from "../database/models/index.js";
import JwtUtility from "../utils/jwt.js";
import dotenv from "dotenv";
dotenv.config();
const isAdmin = async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({ message: req.t('Token_not_provided') }); // assuming the token is sent in the Authorization header
  }
  const token = authheader.split(" ")[1];
  const { id } = req.params;
  try {
    const decodedToken = JwtUtility.verifyToken(token);

    const user = await db.User.findOne({
      where: { id: decodedToken.value.id },
    });
    if (user && decodedToken && decodedToken.value.positionId === 0) {
      req.user = user;
      next();
    } else {
      res
        .status(403)
        .json({ message: req.t('Not_authorized') });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: req.t('Not_authorized') });
  }
};
const parent = async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({ message: req.t('Token_not_provided') }); // assuming the token is sent in the Authorization header
  }
  const token = authheader.split(" ")[1];
  const { id } = req.params;

  try {
    const decodedToken = JwtUtility.verifyToken(token);
    const user = await db.User.findOne({ where: { id: decodedToken.value.id } });

    if (user && decodedToken && decodedToken.value.positionId === 1) {
      req.user = user; 
      next();
    } else {
      res
        .status(403)
        .json({ message: req.t('Not_authorized') });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: req.t('Not_authorized') });
      console.log(err)
  }
};
const child = async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({ message: req.t('Token_not_provided') }); // assuming the token is sent in the Authorization header
  }
  const token = authheader.split(' ')[1];
  const { id } = req.params;
  try {
    const decodedToken = JwtUtility.verifyToken(token);
    const user = await db.User.findOne({ where: { id: decodedToken.value.id } });
    if (user && decodedToken && decodedToken.value.positionId=== 2) {
      req.user = user;
      next();
    } else {
      res
        .status(403)
        .json({ message: req.t('Not_authorized') });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: req.t('server_error')});
  }
};



const checkPermission = (permission) => async (req, res, next) => {
  const authheader = req.headers.authorization;
  // assuming the token is sent in the Authorization header
  if (!authheader) {
    return res.status(401).json({ message:req.t("Token_not_provided") }); // assuming the token is sent in the Authorization header
  }
  const token = authheader.split(" ")[1];
  // const { id } = req.params;
  const permissions = {
    0: ['manage users', 'manage expanse','view expence'],
    1: ['manage expance','view expence'],
    2: ['view expence'],
  };
  try {
    const decodedToken = JwtUtility.verifyToken(token);
    const user = await db.User.findOne({ where: { id: decodedToken.value.id } });
    const positionId = decodedToken.value.positionId;
    if (user && permissions[positionId]?.includes(permission)) {
      next();
    } else {
      // next();
      res
        .status(403)
        .json({ message: req.t('Not_authorized') });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: req.t('server_error') });
  }
};

export { isAdmin , parent , child , checkPermission};