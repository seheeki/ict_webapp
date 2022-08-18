import express from "express";
import routes from "../routes";
import { home } from "../controllers/imageController";
import { getLogin, postLogin, getJoin, postJoin, login, logout } from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin)

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);


export default globalRouter;