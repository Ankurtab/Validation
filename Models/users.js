const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required:true,
        minLength: 3,
        maxLength:20
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        min: 14,
        max: 70
    },
    gender: {
        type: String,
        // enum: ["male","female","other"]
        validate(value){
            if(!["male","female","other"].includes(value))
                throw new Error("Invalid Gender");
        }
    },
    emailId:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        lowerCase: true,
        immutable: true
    },
    password:{
        type:String,
        required: true,
        minLength: 8
    },
    photo: {
        type: String,
        default: "This is the default photo."
    }
},{timestamps: true})

const User = mongoose.model("user",userSchema);

module.exports = User;