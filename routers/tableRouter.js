import express from "express";
import routes from "../routes";
import { table } from "../controllers/tableController";

const tableRouter = express.Router();

tableRouter.get(routes.table, (req, res) => res.send("Table"));
//tableRouter.get(routes.table, table);

export default tableRouter;