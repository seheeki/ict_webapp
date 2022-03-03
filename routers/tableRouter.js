import express from "express";
import routes from "../routes";

const tableRouter = express.Router();

tableRouter.get(routes.table, (res, req) => res.send('Table'));

export default tableRouter;