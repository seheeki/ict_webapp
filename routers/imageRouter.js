import express from "express";
import routes from "../routes";
import { getBed, getChair, getCusion, getLamp, getMirror, getSofa, getTable, getFurnitureList, 
    getUpload, postUpload, 
    imageResult, imageDetail, 
    imageType, imageTypeTest } from "../controllers/imageController";
import { uploadImage, onlyPrivate } from "../middlewares";
const imageRouter = express.Router();

imageRouter.get(routes.upload, onlyPrivate, getUpload);
imageRouter.post(routes.upload, onlyPrivate, uploadImage, postUpload);

imageRouter.get(routes.images, (req, res) => res.render("images"));
imageRouter.get(routes.imageType(), onlyPrivate, imageType);
imageRouter.get(routes.furnitureList(), onlyPrivate, getFurnitureList);

//imageRouter.get(routes.furnitureList, (req, res)=> res.render("furnitureList"));
//imageRouter.get(routes.bed(), onlyPrivate, getBed);
//imageRouter.get(routes.chair(), onlyPrivate, getChair);
//imageRouter.get(routes.cusion(), onlyPrivate, getCusion);
//imageRouter.get(routes.sofa(), onlyPrivate, getSofa);
//imageRouter.get(routes.lamp(), onlyPrivate, getLamp);
//imageRouter.get(routes.mirror(), onlyPrivate, getMirror);
//imageRouter.get(routes.table(), onlyPrivate, getTable);

export default imageRouter;