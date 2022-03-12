import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    fileUrl: {
        type: String, 
        required: "FileURL is required"
    }
    //title:{
    //    type: String, 
    //    required: "Title is required"
    //},
    //createdAt: {
    //    type: Date, 
    //    default: Date.now
    //}
});

const model = mongoose.model("Image", ImageSchema);
export default model;