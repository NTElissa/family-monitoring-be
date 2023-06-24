import express from 'express';
import {createUser,GetAllUsers ,GetOneUser} from '../controllers/user/signup.controller';



const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.get("/allusers",GetAllUsers);
userRouter.get("/one/:id",GetOneUser);




export default userRouter;
