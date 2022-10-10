const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ducks_db", {
    useNewUrlParser: true
});

// makes a new Schema
const duckSchema = new mongoose.Schema({
    vibe: {
        type: String,
        require: true
    },
    colour: String,
    name: {
        type: String,
        require: true
    }
});

const duckModel1 = mongoose.model("duck", duckSchema); // object with all the mongo functions

module.exports = {
    duckModel1
}