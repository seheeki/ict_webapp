import express from "express";
import routes from "../routes";

const imageRouter = express.Router();

imageRouter.get(routes.images, (res, req) => res.send('Images'));
imageRouter.get(routes.imageDetail, (res, req) => res.send('Image Detail'));
imageRouter.get(routes.imageResult, (res, req) => res.send('Image Result'));
imageRouter.get(routes.upload, (res, req) => res.send('Upload'));

export default imageRouter;