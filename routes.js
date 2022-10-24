// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";

// Images
const IMAGES = "/images";
const UPLOAD = "/upload";
const FILEUPLOAD = "/fileupload"
const IMAGE_TYPE = "/:id";

// Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

// Images furniture
const FURNITURE_LIST = "/:id/furnitureList";

//const FURNITURE_LIST = "/furnitureList";
const BED = "/furnitureList/bed&:style";
const CHAIR = "/furnitureList/chair&:style";
const CUSION = "/furnitureList/cusion&:style";
const MIRROR = "/furnitureList/mirror&:style";
const TABLE = "/furnitureList/table&:style";
const SOFA = "/furnitureList/sofa&:style";
const LAMP = "/furnitureList/lamp&:style";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if(id){
            return `/users/${id}`;
        } else{
            return USER_DETAIL;
        }
    },
    images: IMAGES,
    kakao: KAKAO,
    kakaoCallback: KAKAO_CALLBACK,
    //imageType: (id) => {
    //    if(id){
    //        return `/images/${id}/imageType`;
    //    } else{
    //        return IMAGE_TYPE;
    //    }
    //},
    upload: UPLOAD,
    //furnitureList: FURNITURE_LIST,
    fileupload: FILEUPLOAD,
    imageType: (id) => {
        if(id){
            return `/images/${id}`;
        } else{
            return IMAGE_TYPE;
        }
    },
    furnitureList: (id) => {
        if(id){
            return `/images/${id}/furnitureList`;
        } else{
            return FURNITURE_LIST;
        }
    },
    //FURNITURE LIST 
    bed: (style) => {
        if(style){
            return `/furnitureList/bed&${style}`;
        } else{
            return BED;
        }
    },
    chair: (style) => {
        if(style){
            return `/furnitureList/chair&${style}`;
        } else{
            return CHAIR;
        }
    },
    cusion: (style) => {
        if(style){
            return `/furnitureList/cusion&${style}`;
        } else{
            return CUSION;
        }
    },
    lamp: (style) => {
        if(style){
            return `/furnitureList/lamp&${style}`;
        } else{
            return LAMP;
        }
    },
    mirror: (style) => {
        if(style){
            return `/furnitureList/mirror&${style}`;
        } else{
            return MIRROR;
        }
    }, 
    sofa: (style) => {
        if(style){
            return `/furnitureList/sofa&${style}`;
        } else{
            return SOFA;
        }
    },
    table: (style) => {
        if(style){
            return `/furnitureList/table&${style}`;
        } else{
            return TABLE;
        }
    },
}

export default routes;