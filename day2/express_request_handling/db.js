const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db", {
    useNewUrlParser: true
});

//we are making a new schema through mongoose
const duckSchema = new mongoose.Schema({
    disposition: {
        type: String,
        require: true
    },
    colour: String,
    name:{
        type: String,
        require: true
    }
});


const duckModel = mongoose.model("duck", duckSchema); //object with all the mongo functions

module.exports = {
    duckModel
}