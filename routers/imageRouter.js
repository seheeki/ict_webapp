import express from "express";
import routes from "../routes";
import { getFurnitureType, getUpload, postUpload, imageResult, imageDetail, imageType, imageTypeTest } from "../controllers/imageController";
import { uploadImage, onlyiPrivate } from "../middlewares";
const imageRouter = express.Router();

imageRouter.get(routes.upload, getUpload);
imageRouter.post(routes.upload, uploadImage, postUpload);

imageRouter.get(routes.images, (req, res) => res.render("images"));
imageRouter.get(routes.imageType(), imageType);
imageRouter.get(routes.furnitureType(), getFurnitureType);

export default imageRouter;