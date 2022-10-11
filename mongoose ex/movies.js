const express = require('express');

const { filmModel } = require("./dbmovies");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());




const films = (req, res, next) => {
    console.log("GATHER ROUND, WE'RE GETTING POPCORN");
    next();
};

app.get('/getAll', films, (req, res) => {
    filmModel.find({}).then(results => res.send(results)).catch(err => next(err));
});

app.get("/get/:id", (req, res, next) => {
    const {id} = req.params;
    if (!movies[id]) return next ("This dog is not on a walk today");
    res.send(movies[id]);
});

app.post("/newRelease", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "This is a tax write off by the studio"})
    filmModel.create(req.body).then(result => res.status(201).send(result)).catch(err=> next(err));
   
});



app.delete("/boxOfficeFlop/:id", (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    filmModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

//updating json file version
app.patch("/netflixEdit/:id", (req,res,next) => {
    const {id} = req.params;
    const fname = req.body.name;
    console.log("New Name:", fname);
   filmModel.findByIdAndUpdate(id, {name: fname}).then(result => res.send(result)).catch(err => next(err));

});
//query version
app.patch("/imdbUpdate/:id", (req,res,next) => {
    const {id} = req.params;
    const fname = req.query.name;
    console.log("Query:", fname);
    filmModel.findByIdAndUpdate(id, {name: fname}).then(result => res.send(result)).catch(err => next(err));

});


app.get('/bigError', (req, res, next) =>{
    next(Error(`This is also an error`));
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "This is an error because we need one.");
})

//server
const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});