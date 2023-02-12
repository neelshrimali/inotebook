const mongoose = require('mongoose');
const mongoURI ="mongodb://127.0.0.1:27017/?directConnection=true";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,
        ()=>{
        console.log("Connnected to mongoDB successfully.")
    },6000)
}

module.exports = connectToMongo;
