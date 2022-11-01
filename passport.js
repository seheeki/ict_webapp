import passport from "passport";
import kakaoStrategy from "passport-kakao";
import User from "./models/User";
import { kakaoLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
    new kakaoStrategy ({
        clientID : process.env.KAKAO_ID,
        clientSecret: null, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
        callbackURL : `http://localhost:4000${routes.kakaoCallback}`
    },
    kakaoLoginCallback)
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
