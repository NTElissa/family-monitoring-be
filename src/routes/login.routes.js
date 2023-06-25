import express from 'express';
import {Login ,Logout} from '../controllers/user/login.controller'

const UserRouter = express.Router();

UserRouter.post('/use/login', Login);
UserRouter.post('/use/logout', Logout);

export default UserRouter;