import passport from "passport";
//import kakaoStrategy from "passport-kakao";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//import {kakaoLoginCallback} from "./controllers/userController";

//passport.use(
//    new kakaoStrategy(
//        {
//            clientID : process.env.KAKAO_ID,
//            callbackURL : `http://localhost:4000${routes.kakaoCallback}`
//        },
//        kakaoLoginCallback
//    )
//);

