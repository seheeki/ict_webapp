import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Image";

const jsdom = require("jsdom-global");
global.document = jsdom({url: "http://localhost"});

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
