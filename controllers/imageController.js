import routes from "../routes";
import Image from "../models/Image";
import InteriorColor from "../models/InteriorColor";
import InteriorEffect from "../models/InteriorEffect";
import StyleImage from "../models/StyleImage"
import Product from "../models/Product";
// crawling 함수
const _ = require('lodash'); // 유틸리티 함수 제공
const axios = require('axios'); // http 클라이언트 모듈
const cheerio = require('cheerio'); // html 파싱 및 dom 생성

// url 설정 함수
const makingUrl = (style, furniture) => {
    const url = 'https://search.danawa.com/dsearch.php?k1=' + style + '%20' + furniture;
    return url;
};

// 크롤링 설정 함수
export const getHtml = async (url, res) => {
    try{
        //res.setHeader('Access-Control-Allow-Origin', '*');
        return await axios.get(url);
    } catch (error){
        console.log(error);
    }
};

export const getFurnitureList = async (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.header("Access-Control-Allow-Origin", "*");
    const { 
        params: {id},
    } = req;
    const imageInfo = await Image.findById(id);
    const style = imageInfo.style;
    const crawlingInfo = {"style": style, "furnitures": ["bed", "chair", "cushion", "lamp", "mirror", "sofa", "table"]};
    const shoppingURLS = Array();
    for(var i=0; i<crawlingInfo.furnitures.length; i++){
        shoppingURLS.push(makingUrl(style, crawlingInfo.furnitures[i]));
    }
    const prodList = Array();
    for(var i=0; i<crawlingInfo.furnitures.length; i++){
        prodList.push(await Product.find({"style": style, "furniture": crawlingInfo.furnitures[i]}));
    }
    //
    //for(const f of crawlingInfo.furnitures){
    //    const url = makingUrl(style, f);
    //    console.log(url);
    //    let db = new Array();
    //    getHtml(url, res)
    //    .then(async html => {
    //        let ulList = [];
    //        const $ = cheerio.load(html.data);
    //        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');
    //    
    //        $bodyList.each(function(i, elem){
    //            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
    //            ulList[i] = {
    //                furniture: f,
    //                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
    //                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
    //                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
    //                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
    //            };
    //        });
    //        const data = ulList.filter(n=>n.url);
    //        console.log(data);
    //        for(var i = 0; i<data.length; i++){
    //            const newProd = await Product.create({
    //                style: style,
    //                furniture: data[i].furniture,
    //                url: data[i].url,
    //                img_src: data[i].img_src,
    //                title: data[i].title,
    //                priceList: data[i].priceList
    //            });
    //        }
    //    });
    //}
    
    
    res.render("furnitureList", { pageTitle: "Furniture List", imageInfo, style, shoppingURLS, prodList, user: req.user});
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
    const { body,
        files,
        file: { location, filename },
        data
    } = req;

    const newImage = await Image.create({
        fileUrl: location,
        title: filename,
        uploader: req.user.id
    });

    const request = require("request");
    const header = { "Content-Type": "application/json" };
    const options = {
        url: "http://127.0.0.1:5000/",
        method: "POST",
        json: req.file
    };

    const callback = async (error, response) => {
        const { body} = response;
        if (!error & response.statusCode == 200) {
            console.log(body);
            console.log(`body class_name ${body.class_name}`);
            console.log(newImage.id);
            await Image.findOneAndUpdate({_id: newImage.id}, {style: body.class_name});
        }
    }

    //임시
    try{
        const result = imageTypeTest();
        const imageUpdate = await Image.findOneAndUpdate({_id: newImage.id}, {style: result});
    } catch(error){
        console.log(error);
    }
    //const result = request(options, callback);
    res.redirect(routes.imageType(newImage.id));
};

// 임시 함수
export const imageTypeTest = () => {
    return "natural";
};

// 1차 결과
export const imageType = async (req, res) => {
    const {
        params: { id },
    } = req;
    
    const wait = require("waait");
    async function readData() {
        await wait(3000);
        try{
            const image = await Image.findById(id);
            const styleImage = await StyleImage.findOne({style: image.style});
            //const colorTable = await InteriorColor.findOne({ style: image.style });
            //const effectTable = await InteriorEffect.findOne({ color: colorTable.color });
            const ID = id;
            res.render("imageType", { pageTitle: "Image Type", image, ID, styleImage, user:req.user }); //colorTable, effectTable, ID, styleImage });
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
    readData();
};

export const home = async (req, res) => {
    res.render("home", { pageTitle: "Home" });
};