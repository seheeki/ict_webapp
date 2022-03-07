import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "interior";
    res.locals.routes = routes;
    next();
};