import routes from "../routes";

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = (req, res) => {
    const{
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else{
        // to do : register User
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});
export const postLogin = (req, res) => res.render("login", {pageTitle: "Login"});

export const logout = (req, res) => res.render("logout", {pageTitle: "Logout"});

export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "UserDetail"});