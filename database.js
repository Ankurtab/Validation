const mongoose = require("mongoose");

async function main(){
    await mongoose.connect("mongodb+srv://ankurkumartab6633:ankur@cluster0.zot2apd.mongodb.net/Instagram")
}

module.exports = main;