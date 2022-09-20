import express from "express";
import routes from "../routes";
import { home } from "../controllers/imageController";
import { getLogin, postLogin, getJoin, postJoin, login, logout } from "../controllers/userController";
import {onlyPublic, onlyPrivate} from "../middlewares";
const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);


export default globalRouter;