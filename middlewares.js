import multer from "multer";
import routes from "./routes";

const multerImage = multer({ dest: "uploads/images/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "interior";
    res.locals.routes = routes;
    next();
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};

export const uploadImage = multerImage.single("file");