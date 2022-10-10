const express = require(`express`);

const app = express();

const routes = require('./routes/routes')

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const dateFun = (req, res, next) => {
    console.log(new Date());
    next();
}

app.use(dateFun, routes);

//error ex - if we have anythign in next() it will treat it as an error and parse straight to our error function and handle it. sad for scooby doo. If there is no error func it will crash
app.use((req, res, next) => {
    console.log("This is literally just an example");
    return next();//next("ruh-roh") would give the error. It basically bypasses onto a new "timeline" because error
})

app.get(`/`, (req, res) => res.send(`Hello my name is J!`));

//server
const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

