import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    region: process.env.AWS_REGION
});

//const multerImage = multer({ dest: "uploads/images/"});
const multerImage = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "easy-style-change/images"
    })
});

export const uploadImage = multerImage.single("file");

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "interior";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
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