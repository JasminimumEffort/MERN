const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dogs_db", {
    useNewUrlParser: true
});

// makes a new Schema
const dogSchema = new mongoose.Schema({
    name: String
    
});

const dogModel = mongoose.model("dog", dogSchema); // object with all the mongo functions

// const homefamSchema = new 
//     mongoose.Schema({
//         name1: {
//             type: String,
//             Required: true
//         },
//         name2: String,
//         name3: String
//     });
 
// dogSchema = Schema({
//     children: [ homefamSchema ]
// });

module.exports = {
    dogModel
}