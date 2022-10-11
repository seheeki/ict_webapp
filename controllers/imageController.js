import routes from "../routes";
import Image from "../models/Image";
import InteriorColor from "../models/InteriorColor";
import InteriorEffect from "../models/InteriorEffect";

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
        //const url = 'https://search.danawa.com/dsearch.php?k1=romantic%20sofa';
        //res.setHeader('Access-Control-Allow-Origin', '*');
        return await axios.get(url);
    } catch (error){
        console.log(error);
    }
};

export const getFurnitureType = async (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.header("Access-Control-Allow-Origin", "*");
    const { 
        params: {id},
    } = req;
    const imageInfo = await Image.findById(id);
    const style = imageInfo.style;
    res.render("furnitureType", { pageTitle: "Furniture Type", imageInfo, style});
};

// 각종 침구 페이지들
//bed
export const getBed  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "bed");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);

        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("bed", {pageTitle: "Bed", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

//chair
export const getChair  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "chair");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);
    
        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("chair", {pageTitle: "Chair", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

//cusion
export const getCusion  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "cusion");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);
    
        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("cusion", {pageTitle: "Cusion", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

//lamp
export const getLamp  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "lamp");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);
        
        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("lamp", {pageTitle: "Lamp", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

//mirror
export const getMirror  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "mirror");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);
        
        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("mirror", {pageTitle: "Mirror", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

//mirror
export const getSofa  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "sofa");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);
        
        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("sofa", {pageTitle: "Sofa", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

//table
export const getTable  = async (req, res) => {
    const {
        params: { style },
    } = req;

    // 크롤링할 url 만들기
    const url = makingUrl(style, "table");

    // 크롤링 실행
    getHtml(url, res)
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList =  $('div.danawa_product_list div div div div div div ul').children('li.prod_item');

        $bodyList.each(function(i, elem){
            const cellEls = $(this).find('div.prod_pricelist ul li p.price_sect a strong'); 
            ulList[i] = {
                url: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').attr('href'),
                img_src: $(this).find('div.prod_main_info div a img').attr('src'),
                title: $(this).find('div.prod_main_info div p a.click_log_product_standard_title_').text(),
                priceList: cellEls.toArray().map((node) => $(node).text()).sort(),
            };
        });
        const data = ulList.filter(n=>n.url);
        
        const wait = require("waait");
        async function readData() {
            console.log("waiting...");
            await wait(3000);
            console.log("done."); 
            try{
                res.render("table", {pageTitle: "Table", data, url, style});
            } catch (error) {
                res.redirect(routes.home);
            }
        }
        readData();
    })
}

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
    const { body,
        files,
        file: { path, filename },
        data
    } = req;
    
    //console.log(req.file['path']);
    //console.log(req.body);

    const newImage = await Image.create({
        fileUrl: path,
        title: filename
    });
    //console.log(newImage.fileUrl);

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
        const fResult = furnitureTypeTest();
        const fSize = fResult.length;
        console.log(fResult);
        console.log(fSize);
        const imageUpdate = await Image.findOneAndUpdate({_id: newImage.id}, {style: result});
        for(var f = 0; f < fSize; f++){
            imageUpdate.furnitureList.push(fResult[f]);
        }
        imageUpdate.furnitureNum = fSize;
        imageUpdate.save();
    } catch(error){
        console.log(error);
    }
    //const result = request(options, callback);
    res.redirect(routes.imageType(newImage.id));
};

// 임시 함수
export const imageTypeTest = () => {
    return "romantic";
}

export const furnitureTypeTest = () => {
    return ["sofa", "TV", "bed", "cusion"];
};

// 1차 결과
export const imageType = async (req, res) => {
    const {
        params: { id },
    } = req;

    console.log(`imageID : ${id}`);
    const wait = require("waait");

    async function readData() {
        console.log("waiting...");
        await wait(3000);
        console.log("done."); 
        try{
            const image = await Image.findById(id);
            console.log(`imageFileUrl: ${image.fileUrl}`);
            console.log(`imageSytle: ${image.style}`);
        
            const colorTable = await InteriorColor.findOne({ style: image.style });
            const effectTable = await InteriorEffect.findOne({ color: colorTable.color });
            
            const ID = id;
            res.render("imageType", { pageTitle: image.title, image, colorTable, effectTable, ID });
        } catch (error) {
            res.redirect(routes.home);
        }
    }
    readData();
    //getFurnitureType(id);
};

export const home = async (req, res) => {
    res.render("home", { pageTitle: "Home" });
};