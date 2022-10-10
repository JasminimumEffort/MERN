const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dogs_db", {
    useNewUrlParser: true
});

// makes a new Schema
const dogSchema = new mongoose.Schema({
    name: String
});

const dogModel = mongoose.model("dog", dogSchema); // object with all the mongo functions

module.exports = {
    dogModel
}