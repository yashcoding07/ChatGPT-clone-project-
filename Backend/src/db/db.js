const mongoose = require("mongoose");

async function connectToDB(){
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log("connected to db");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectToDB;