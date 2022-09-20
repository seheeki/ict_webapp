import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String}, 
    email: {type: String}, 
    avatarUrl: {type: String},
    kakaoID: {
        type: Number,
        //default: "undefined"
    }
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "email"});

const model = mongoose.model("User", UserSchema);

export default model;