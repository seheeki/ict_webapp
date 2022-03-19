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
const IMAGE_DETAIL = "/:id";
const UPLOAD = "/upload";
const IMAGE_RESULT = "/:id/result";
const IMAGE_TYPE = "/:id";

// Table
const TABLE = "/table";

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
    imageDetail: (id) => {
        if(id){
            return `/images/${id}/imageDetail`;
        } else{
            return IMAGE_DETAIL;
        }
    },
    imageResult: IMAGE_RESULT,
    upload: UPLOAD,
    table: TABLE,
    imageType: (id) => {
        if(id){
            return `/images/${id}`;
        } else{
            return IMAGE_TYPE;
        }
    }
}

export default routes;