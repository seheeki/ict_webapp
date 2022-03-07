import express from "express";
import routes from "../routes";
import { upload, imageResult, imageDetail } from "../controllers/imageController";
const imageRouter = express.Router();

imageRouter.get(routes.upload, upload);
imageRouter.get(routes.images, (req, res) => res.render("images"));
imageRouter.get(routes.imageDetail, imageDetail);
imageRouter.get(routes.imageResult, imageResult);

export default imageRouter;