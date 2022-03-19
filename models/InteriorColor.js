import mongoose from "mongoose";

const InteriorColorSchema = new mongoose.Schema({
    style: {
        type: String,
    },
    color: {
        type: String,
    },
    colorCode: {
        type: String,
    }
});

const model = mongoose.model("Interior_color", InteriorColorSchema);
export default model;