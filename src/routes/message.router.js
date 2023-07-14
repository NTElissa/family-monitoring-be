import express from 'express';
import {sendMessage, getMessages, deleteAllMessages, deleteOneMessage} from '../controllers/messages/messages.controller.js'

const MessageRouter = express.Router();

MessageRouter.post('/sendMessage/:id' ,sendMessage);
MessageRouter.get('/getMessagesAll' ,getMessages);
MessageRouter.delete('/deleteOne/:messageId' , deleteOneMessage);
MessageRouter.delete('/deleteAll',deleteAllMessages);
export default MessageRouter;