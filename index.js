import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from home");
const handleProfile = (req, res) => res.send("you are on my profile");
const betweenHome = (req, res, next) => {
    console.log("Between Home");
    next()
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);

const handleInputImage = (req, res) => res.send("Input your Image");
const handleTableMapping = (req, res) => res.send("Table Mapping Process...");
const handleResult = (req, res) => res.send("Result");

const deepLearning = (req, res, next) => {
    console.log("Deep Learning");
    next()
}
const tableMapping = (req, res, next) => {
    console.log("Table Mapping1");
    next()
}

app.get("/inputimage", handleInputImage);
app.get("/tablemapping", deepLearning, tableMapping, handleTableMapping);
app.get("/result", handleResult);

app.listen(PORT, handleListening);