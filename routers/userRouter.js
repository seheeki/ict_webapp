import express from "express";
import routes from "../routes";
import { userDetail, users } from '../controllers/userController';
const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.render("users"));
//userRouter.get(routes.userDetail, userDetail);

export default userRouter;