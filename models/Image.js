import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    fileUrl: {
        type: String, 
        required: "FileURL is required"
    },
    style: {
        type: String, 
        default: "undefined"
    },
    uploader: {
        type: String
    }
});

const model = mongoose.model("Image", ImageSchema);
export default model;