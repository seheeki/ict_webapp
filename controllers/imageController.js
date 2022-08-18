import routes from "../routes";
import Image from "../models/Image";
import InteriorColor from "../models/InteriorColor";
import InteriorEffect from "../models/InteriorEffect";

export const getFurnitureType = async (req, res) => {
    const { 
        params: {id},
    } = req;
    const imageInfo = await Image.findById(id);
    res.render("furnitureType", {pageTitle: "furniture result", imageInfo});
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
    const { body,
        files,
        file: { path, filename },
        data
    } = req;
    
    //console.log(req.file['path']);
    //console.log(req.body);

    const newImage = await Image.create({
        fileUrl: path,
        title: filename
    });
    //console.log(newImage.fileUrl);

    const request = require("request");
    const header = { "Content-Type": "application/json" };
    const options = {
        url: "http://127.0.0.1:5000/",
        method: "POST",
        json: req.file
    };

    const callback = async (error, response) => {
        const { body} = response;
        if (!error & response.statusCode == 200) {
            console.log(body);
            console.log(`body class_name ${body.class_name}`);
            console.log(newImage.id);
            await Image.findOneAndUpdate({_id: newImage.id}, {style: body.class_name});
        }
    }

    //임시
    try{
        const result = imageTypeTest();
        const fResult = furnitureTypeTest();
        const fSize = fResult.length;
        console.log(fResult);
        console.log(fSize);
        const imageUpdate = await Image.findOneAndUpdate({_id: newImage.id}, {style: result});
        for(var f = 0; f < fSize; f++){
            imageUpdate.furnitureList.push(fResult[f]);
        }
        imageUpdate.furnitureNum = fSize;
        imageUpdate.save();
    } catch(error){
        console.log(error);
    }
    //const result = request(options, callback);
    res.redirect(routes.imageType(newImage.id));
};

// 임시 함수
export const imageTypeTest = () => {
    return "romantic";
}

export const furnitureTypeTest = () => {
    return ["sofa", "TV", "bed", "cusion"];
};

// 1차 결과
export const imageType = async (req, res) => {
    const {
        params: { id },
    } = req;

    console.log(`imageID : ${id}`);
    const wait = require("waait");

    async function readData() {
        console.log("waiting...");
        await wait(3000);
        console.log("done."); 
        try{
            const image = await Image.findById(id);
            console.log(`imageFileUrl: ${image.fileUrl}`);
            console.log(`imageSytle: ${image.style}`);
        
            const colorTable = await InteriorColor.findOne({ style: image.style });
            const effectTable = await InteriorEffect.findOne({ color: colorTable.color });
            
            const ID = id;
            res.render("imageType", { pageTitle: image.title, image, colorTable, effectTable, ID });
        } catch (error) {
            res.redirect(routes.home);
        }
    }
    readData();
    //getFurnitureType(id);
};

export const home = async (req, res) => {
    res.render("home", { pageTitle: "Home" });
};