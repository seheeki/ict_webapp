import express from "express";
import routes from "../routes";
import { getFurnitureType, getUpload, postUpload, imageResult, imageDetail, imageType, imageTypeTest } from "../controllers/imageController";
import { uploadImage, onlyPrivate } from "../middlewares";
const imageRouter = express.Router();

imageRouter.get(routes.upload, onlyPrivate, getUpload);
imageRouter.post(routes.upload, onlyPrivate, uploadImage, postUpload);

imageRouter.get(routes.images, (req, res) => res.render("images"));
imageRouter.get(routes.imageType(), onlyPrivate, imageType);
imageRouter.get(routes.furnitureType(), onlyPrivate, getFurnitureType);

export default imageRouter;