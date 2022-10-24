import mongoose from "mongoose";

//롤링할 웹 사이트들의 정보들을 정의했다. 
//웹사이트의 기본적인 정보와 새로운 글이 올라왔는지 확인하기 위한 정보들을 가지고 있다.

const WebSiteInfoSchema = new mongoose.Schema({
    title: String,
    url: String,
    crawlUrl: String,
    cssSelector: String,
    lastUrl: String,
    category: String,
    checkingCycleSec: Number,
    isDisabled: Boolean
});

const model = mongoose.model("WebSite", WebSiteInfoSchema);
export default model;