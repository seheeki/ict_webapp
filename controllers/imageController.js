import routes from "../routes";
import Image from "../models/Image";

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postUpload = async (req, res) => {
    const { body, 
            file: { path, filename } 
    } = req;
    const newImage = await Image.create({
        fileUrl: path,
        title: filename
    });
    console.log(newImage);
    res.redirect(routes.imageDetail(newImage.id));
};
export const imageResult = (req, res) => res.render("imageResult", {pageTitle: "imageResult"});
export const imageDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const image = await Image.findById(id)
        res.render("imageDetail", { pageTitle: image.title, image });
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const home = async (req, res) => {
    const images = await Image.find({});
    res.render("home", {pageTitle: "Home", images});
}