import mongoose from "mongoose";

//저장한 페이지 정보들을 정의

const WebPageInfoSchema = new mongoose.Schema({
    siteId: String,
    siteTitle: String,
    title: String,
    url: String,
    imageUrl: String,
    desc: String,
    category: String,
    time: Date,
    isRead: Boolean,
    isArchieved: Boolean
});

const model = mongoose.model("WebPage", WebPageInfoSchema);
export default model;