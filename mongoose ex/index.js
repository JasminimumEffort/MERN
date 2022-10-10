const express = require('express');

const { dogModel } = require("./myexdb");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


let dogs = [{"name":"Poppy"},{"name": "Mabel"},{"name" : "Winnie"},{"name":"Orla"},{"name" :"Bess"},{"name" : "Morley"},{"name" : "Hugo"},{"name" : "Scooby"},{"name" : "Ripley"}];


const walkies = (req, res, next) => {
    console.log("GATHER ROUND, WE'RE GOING ON A WALKIES");
    next();
};

app.get('/getAll', walkies, (req, res) => {
    dogModel.find({}).then(results => res.send(results)).catch(err => next(err));
});

app.get("/get/:id", (req, res, next) => {
    const {id} = req.params;
    if (!dogs[id]) return next ("This dog is not on a walk today");
    res.send(dogs[id]);
});

app.post("/newDog", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing dog"})
    dogModel.create(req.body).then(result => res.status(201).send(result)).catch(err=> next(err));
    // dogs.push(req.body);
    // res.status(201).send(dogs);
});

// // we are not deleting dogs. merely sending them home from their walks. still fixing
//  app.delete("/sendHome/:name", (req,res, next/*next*/) => {
//      const dname  = req.params.name;
//      if (!dogs.some(dogs => dogs.name === dname)) return next({ status: 404, message: `${dname} is actually not on a walk today`});
//      console.log(`${dname} is returning home and having a chew stick, they\'ve had a lovely walk!`);
//      dogModel.findbyIdandDelete(dname).then(result => res.send(`${dname} is returning home and having a chew stick, they\'ve had a lovely walk!`)).catch(err => next(err));
//     //  res.send(dogs.splice(dname,1));
//  });

app.delete("/sendHome/:id", (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    dogModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

//updating json file version
app.patch("/newVetRecords/:id", (req,res,next) => {
    const {id} = req.params;
    const dname = req.body.name;
    console.log("New Name:", dname);
    dogModel.findByIdAndUpdate(id, {name: dname}).then(result => res.send(result)).catch(err => next(err));

});
//query version
app.patch("/newCollar/:id", (req,res,next) => {
    const {id} = req.params;
    const dname = req.query.name;
    console.log("Query:", dname);
    dogModel.findByIdAndUpdate(id, {name: dname}).then(result => res.send(result)).catch(err => next(err));

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

//server
const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});