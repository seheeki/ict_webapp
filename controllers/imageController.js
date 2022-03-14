import routes from "../routes";
import Image from "../models/Image";

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postUpload = async (req, res) => {
    const { body, 
            file: { path, filename } 
    } = req;
    const path2 = path.replace("\\\\", "\\");
    const undef = "undefined";
    const newImage = await Image.create({
        fileUrl: path2,
        title: filename,
        //interiorStyle: undef
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
        // 사용자가 upload한 이미지 불러오기
        res.render("imageDetail", { pageTitle: image.title, image });
    } catch (error) {
        res.redirect(routes.home);
    }
};
export const home = async (req, res) => {
    const images = await Image.find({});
    res.render("home", {pageTitle: "Home", images});
};

export const setThumbnail = (event) => { 
    const reader = new FileReader(); 
    reader.onload = (event) => {
        const img = document.createElement("img"); 
        img.setAttribute("src", event.target.result); 
        document.querySelector(".image__container").appendChild(img); }; 
        reader.readAsDataURL(event.target.files[0]); 
};

export const displayImage = (src) => {
    
}