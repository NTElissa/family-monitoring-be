"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _messagesController = require("../controllers/messages/messages.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageRouter = _express.default.Router();
MessageRouter.post('/sendMessage/:id', _messagesController.sendMessage);
MessageRouter.get('/getMessagesAll', _messagesController.getMessages);
MessageRouter.delete('/deleteOne/:messageId', _messagesController.deleteOneMessage);
MessageRouter.delete('/deleteAll', _messagesController.deleteAllMessages);
var _default = MessageRouter;
exports.default = _default;