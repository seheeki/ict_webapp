// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logut";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";

// Images
const IMAGES = "/images";
const UPLOAD = "/upload";
const FILEUPLOAD = "/fileupload"
const IMAGE_TYPE = "/:id";

// Images furniture
const FURNITURE_TYPE = "/:id/furnitureType";

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
    //imageType: (id) => {
    //    if(id){
    //        return `/images/${id}/imageType`;
    //    } else{
    //        return IMAGE_TYPE;
    //    }
    //},
    upload: UPLOAD,
    fileupload: FILEUPLOAD,
    imageType: (id) => {
        if(id){
            return `/images/${id}`;
        } else{
            return IMAGE_TYPE;
        }
    },
    furnitureType: (id) => {
        if(id){
            return `/images/${id}/furnitureType`;
        } else{
            return FURNITURE_TYPE;
        }
    }
}

export default routes;