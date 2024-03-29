import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from './middlewares';
// ==== Router ==== // 
import routes from './routes';
import userRouter from './routers/userRouter';
import imageRouter from './routers/imageRouter';
import globalRouter from './routers/globalRouter';


import "./passport";

const app = express();
app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "credentialless");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    //res.header("Cross-Origin-Opener-Policy", "cross-origin");
    next();
});

const CokieStore = MongoStore(session);

app.use(express.json())

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ 
            mongooseConnection: mongoose.connection
        })
    })
);
app.use(passport.initialize());
app.use(passport.session());

//app.use(cors({
//    origin: '*',
//}));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.images, imageRouter);

export default app;