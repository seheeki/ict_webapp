import mongoose from "mongoose";

const InteriorEffectSchema = new mongoose.Schema({
    color: {
        type: String
    },
    style: {
        type: String,
    },
    positive: {
        type: String,
    },
    negative: {
        type: String,
    },
    symbol: {
        type: String
    },
    effect: {
        type: String
    }
});

const model = mongoose.model("Interior_effect", InteriorEffectSchema);
export default model;