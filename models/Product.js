import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    style: String,
    furniture: String,
    url: String,
    img_src: String,
    title: String,
    priceList: [Array]
});

const model = mongoose.model("Product", ProductSchema);
export default model;