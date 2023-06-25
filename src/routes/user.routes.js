import express from 'express';
import {createUser,GetAllUsers ,GetOneUser ,DeleteUser} from '../controllers/user/signup.controller';
import {updateUserProfile} from '../controllers/user/updateProfile.controller';


const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.get("/allusers",GetAllUsers);
userRouter.get("/one/:id",GetOneUser);
userRouter.delete("/deleteUser/:id",DeleteUser);
userRouter.put("/profile/:id",updateUserProfile);




export default userRouter;
