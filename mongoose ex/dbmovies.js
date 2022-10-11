const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movies_db", {
    useNewUrlParser: true
});

// makes a new Schema
const filmschema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    release_date: {
        type: Date,
        require: true
    }
});

const ActorsSchema = new mongoose.Schema({
    ActorName : {
        type: String,
        require: True
    },
    CharacterName: String,
    ReplacedByADog: Boolean
});
 
const filmSchema = new Schema({
    children: [ filmInfoSchema ]
});

const filmModel = mongoose.model("movie", filmSchema); // object with all the mongo functions

module.exports = {
    filmModel
}