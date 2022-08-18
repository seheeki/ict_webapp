import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// ==== Router ==== // 
import userRouter from './routers/userRouter';
import imageRouter from './routers/imageRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';

import { localsMiddleware } from './middlewares';

const app = express();

app.use(express.json())

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.images, imageRouter);

export default app;