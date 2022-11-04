import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import { next } from 'cheerio/lib/api/traversing';

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = async (req, res, next) => {
    const{
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else{
        // 유저 등록
        try{
            const user = await User({
                name, 
                email
            });
            await User.register(user, password);
            next();
        } catch(error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login, 
    successRedirect: routes.home
});

// kakao login session
export const kakaoLogin = passport.authenticate('kakao');
export const kakaoLoginCallback = async (accessToken, refreshToken, profile, done) => {
    //console.log(accessToken, refreshToken, profile, done);
    const { _json: {id, properties, kakao_account}} = profile;
    const kID = id;
    const name = properties.nickname;
    const email = kakao_account.email;
    
    try{
        const user = await User.findOne({email});
        if(user){
            user.kakaoID = kID;
            user.save();
            return done(null, user);
        } else{
            const newUser = await User.create({
                name,
                email,
                kakaoID: kID
            });
            return done(null, newUser);
        }
    } catch (error){
        return done(error);
    }
};
export const postKakaoLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res, next) => {
    req.logout(req.user, err=> {
        if(err) {
            return next(err);
        }
        res.redirect(routes.home);
    });

};