
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


let dogs = [{"name":"Poppy"},{"name": "Mabel"},{"name" : "Winnie"},{"name":"Orla"},{"name" :"Bess"},{"name" : "Morley"},{"name" : "Hugo"},{"name" : "Scooby"},{"name" : "Ripley"}];


const walkies = (req, res, next) => {
    console.log("GATHER ROUND, WE'RE GOING ON A WALKIES");
    next();
};

app.get('/getAll', walkies, (req, res) => {
    res.send(dogs)
});

app.get("/get/:id", (req, res) => {
    res.send(dogs[req.params.id]);
});

app.post("/newDog", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing dog"})
    dogs.push(req.body);
    res.status(201).send(dogs);
});

// // we are not deleting dogs. merely sending them home from their walks. still fixing
 app.delete("/sendHome/:name", (req,res, next/*next*/) => {
     const dname  = req.params.name;
     if (!dogs.some(dogs => dogs.name === dname)) return next({ status: 404, message: `${dname} is actually not on a walk today`});
     console.log(`${dname} is returning home and having a chew stick, they\'ve had a lovely walk!`);
     res.send(dogs.splice(dname,1));
 });

//(dogs.includes(dname))
// app.delete("/delete/:id", (req, res) => {
//     res.send(names.splice(req.params.id, 1));

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

app.listen(4000);