import mongoose from "mongoose";

const StyleImageColorSchema = new mongoose.Schema({
    style: {
        type: String,
    },
    imageSRC:{
        type: String,
    }
});

const model = mongoose.model("style_image", StyleImageColorSchema);
export default model;