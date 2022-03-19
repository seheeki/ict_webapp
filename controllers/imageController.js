import routes from "../routes";
import Image from "../models/Image";
import InteriorColor from "../models/InteriorColor";
import InteriorEffect from "../models/InteriorEffect";

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postUpload = async (req, res) => {
    const { body, 
            file: { path, filename } 
    } = req;
    //let path2 = await path.replace("\\\\", "\\");
    //console.log(path.replace("\\\\", "\\"));
    const newImage = await Image.create({
        fileUrl: path,
        title: filename
    });
    console.log(newImage.fileUrl);
    console.log(newImage);
    // newImage style 저장
    // 사실상 route.imageDetail쪽이 아니라 route.imageType으로 가야 함. 
    // 그 후에 route.imageDetail로 redirection해야한다
    const type = imageTypeTest(); // 가상의 deep learning api를 통해 Image 모델의 type을 얻는다.
    await Image.findOneAndUpdate({ _id: newImage.id}, { style: type });
    // 인테리어 타입으로 이미지 정보 수정해줌
    res.redirect(routes.imageType(newImage.id));
    //res.redirect(routes.imageDetail(newImage.id));
};
export const imageType = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const image = await Image.findById(id)
        console.log(image.style);
        // image style 항목에 해당하는 interior_style collection의 style 내용 가져오기
        //const colortable = Table.findOne({style: image.style});
        const colorTable = await InteriorColor.findOne({style: image.style});
        const effectTable = await InteriorEffect.findOne({color: colorTable.color});
        console.log(effectTable.color);
        res.render("imageType", { pageTitle: image.title, image, colorTable, effectTable});
    } catch (error) {
        res.redirect(routes.home);
    }
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

//export const postImageDetail = (req, res) => 


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

export const imageTypeTest = () => {
    return "romantic";
}

// 카메라 기능 함수 
export const cameraTake = () => {
    const takePicture = document.querySelector("#take-picture");
    const showPicture = document.querySelector("#show-picture");

    if (takePicture && showPicture ) {
        //이벤트 설정
        takePicture.onchange = (event) => {
            //찍은 사진이나 파일에 대한 참조 얻기
            const files = event.target.files;
            var file;
            if (files && files.length > 0){
                file = files[0];
                try{
                    //window.URL 객체 얻기
                    var URL = window.URL || window.webkitURL;
                    
                    //objectURL 생성
                    const imgURL = URL.createObjectURL(file);
                    
                    //src에  ObjectURL 지정
                    showPicture.src = imgURL;

                    //Revoke ObjectURL
                    URL.revokeObjectURL(imgURL);
                } catch (error){
                    try{
                        //createObjectURL을 지원하지 않는 경우 대안
                        const fileReader = new FileReader();
                        fileReader.onload = (event) => {
                            showPicture.src = event.target.result;
                        };
                        fileReader.readAsDataURL(file);
                    } catch(error) {
                        const errors = document.querySelector("#error");
                        if(errors){
                            error.innerHTML = "Neither createObjectURL or FilReader are supported";
                        }
                    }
                }
            }
        }
    }
}
