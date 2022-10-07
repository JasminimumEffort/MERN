const express = require("express");

const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());

const ducks = [];

//I do not have the duck array but this is still pretty useful tbh.

app.get("/hello", (req, res) => {
    res.send("Hello, World!")
});


app.post("/createDuck", (req, res) => {
    ducks.push(req.body);
    res.status(201).send(ducks);
})

app.delete("/removeDuck/:id", (req, res) => {
    console.log("ID:", req.params.id);
    res.send(); //must send response or the request will just sit having a big tantrum
});

//to update I would need the ID of anysuch thing I wnated to update and also the new data
app.patch("/updateDuck/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY: " req.query);
    res.send();
})

const server = app.listen(6129, () => console.log(`Server successfully started on port ${server.address().port}`));