import express from "express";
import routes from "../routes";
import passport from "passport";
import { home } from "../controllers/imageController";
import { kakaoLogin, getLogin, postLogin, getJoin, postJoin, login, logout, postKakaoLogin } from "../controllers/userController";
import {onlyPublic, onlyPrivate} from "../middlewares";
const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(routes.kakaoCallback, 
    passport.authenticate('kakao',{
        failureRedirect: "/login"
    }),
    postKakaoLogin
);

export default globalRouter;