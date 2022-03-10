import express from "express";
import routes from "../routes";
import { getLogin, postLogin, getJoin, postJoin, login, logout } from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin)

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, (req, res) => res.render('home'));

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, (req, res) => res.send('search'));
//globalRouter.get(routes.table, (req, res) => res.send("table"));

export default globalRouter;