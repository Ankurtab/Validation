const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    photo: {
        type: String
    }
})

const User = mongoose.model("user",userSchema);

module.exports = User;