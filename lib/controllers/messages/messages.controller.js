"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.getMessages = exports.deleteOneMessage = exports.deleteAllMessages = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const message = _models.default.messages;
const sendMessage = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const {
      messageText
    } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const createdMessage = await message.create({
      message: messageText,
      UserId: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email
    });
    return res.status(201).json({
      message: "Message sent",
      data: {
        id: createdMessage.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        message: createdMessage.message
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.sendMessage = sendMessage;
const getMessages = async (req, res) => {
  try {
    const messages = await message.findAll();
    return res.status(200).json({
      message: "All messages",
      data: messages
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.getMessages = getMessages;
const deleteAllMessages = async (req, res) => {
  try {
    await message.destroy({
      where: {},
      truncate: true
    });
    return res.status(200).json({
      message: "All messages deleted"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.deleteAllMessages = deleteAllMessages;
const deleteOneMessage = async (req, res) => {
  const {
    messageId
  } = req.params;
  try {
    const messageToDelete = await message.findByPk(messageId);
    if (!messageToDelete) {
      return res.status(404).json({
        message: "Message not found"
      });
    }
    await messageToDelete.destroy();
    return res.status(200).json({
      message: "Message deleted"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
exports.deleteOneMessage = deleteOneMessage;