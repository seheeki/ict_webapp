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
const IMAGE_RESULT = "/:id/result" 

// Table
const TABLE = "/table";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    images: IMAGES,
    imageDetail: IMAGE_DETAIL,
    imageResult: IMAGE_RESULT,
    upload: UPLOAD,
    table: TABLE
}

export default routes;