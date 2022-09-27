import express from "express";
import routes from "../routes";
import { getBed, getFurnitureType, 
    getUpload, postUpload, 
    imageResult, imageDetail, 
    imageType, imageTypeTest } from "../controllers/imageController";
import { uploadImage, onlyPrivate } from "../middlewares";
const imageRouter = express.Router();

imageRouter.get(routes.upload, onlyPrivate, getUpload);
imageRouter.post(routes.upload, onlyPrivate, uploadImage, postUpload);

imageRouter.get(routes.images, (req, res) => res.render("images"));
imageRouter.get(routes.imageType(), onlyPrivate, imageType);
imageRouter.get(routes.furnitureType(), onlyPrivate, getFurnitureType);

imageRouter.get(routes.furnitureList, (req, res)=> res.render("furnitureList"));
imageRouter.get(routes.bed(), onlyPrivate, getBed);
imageRouter.get(routes.chair, onlyPrivate, (req, res) => res.render("chair"));
imageRouter.get(routes.sofa, onlyPrivate, (req, res) => res.render("sofa"));
imageRouter.get(routes.lamp, onlyPrivate, (req, res) => res.render("lamp"));
imageRouter.get(routes.mirror, onlyPrivate, (req, res) => res.render("mirror"));
imageRouter.get(routes.table, onlyPrivate, (req, res) => res.render("table"));

export default imageRouter;