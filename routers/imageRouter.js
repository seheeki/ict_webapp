import express from "express";
import routes from "../routes";
import { getUpload, postUpload, imageResult, imageDetail } from "../controllers/imageController";
import { uploadImage } from "../middlewares";
const imageRouter = express.Router();

imageRouter.get(routes.upload, getUpload);
imageRouter.post(routes.upload, uploadImage, postUpload);

imageRouter.get(routes.images, (req, res) => res.render("images"));
imageRouter.get(routes.imageDetail(), imageDetail);
imageRouter.get(routes.imageResult, imageResult);

export default imageRouter;