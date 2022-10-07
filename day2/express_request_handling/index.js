const express = require(`express`);

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());


//my wee middleware function
const dateFun = (req, res, next) => {
    console.log(new Date());
    next();
}

// //request
// app.use((req,res, next) => {
//     console.log("Request received at", new Date());
//     return next();
// })


//error ex - if we have anythign in next() it will treat it as an error and parse straight to our error function and handle it. sad for scooby doo. If there is no error func it will crash
app.use((req, res, next) => {
    console.log("This is literally just an example");
    return next();//next("ruh-roh") would give the error. It basically bypasses onto a new "timeline" because error
})

app.get(`/`, (req, res) => res.send(`Hello my name is hi!`));

let names = ['James', 'Brandon', 'Steve', 'Jordan', 'Harry'];


app.get('/getAll', (req, res) => {
    res.send(names)
});

//gets item by id but also includes the fun little date function so posts date to console when get function is called
app.get("/get/:id", dateFun, (req, res) => {
    res.send(names[req.params.id]);
});


//can restructure to limit to the size of the paramater
app.delete("/delete/:id", (req, res, next) => {
    const id = req.params.id;
    console.log("ID:", id);
    if (id > names.length) return next({status: 404, message : `No name with that ID found.`});
    res.send(names.splice(id),1);
    //console.log(req.params.id);
    //res.send();
});

// app.delete("/removeDuck/:id", deleteMiddleware, (req, res, next) => {
//     const {id}  = req.params;
//     console.log("ID:", id);
//     if (id > ducks.length) return next({ status: 404, message: `No duck found with id ${id}`});
//     res.send(ducks.splice(id));
// });

//previous delete:
// app.delete("/delete/:id", (req, res) => {
//     res.send(names.splice(req.params.id, 1));
//     //console.log(req.params.id);
//     //res.send();
// });


//go to postman and post with a json file that I made using the above json activation
//could use the bodyparser instead -> just saw this soln in the QA page example of bob v bill.
app.use(express.json());

app.post('/create', (req,res, next) => {
    const name = req.body.name;
    if (!req.body.name) return next ({ status: 400, message: "Missing name"})
    console.log(`name: `, req.body.name);
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});


//so go to myserver/replace/index?name="newname" to get new name to replace them
app.put('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const place = names[index];
    names[index] = name;
    res.status(202).send(`${place} is now taken by ${name}`)
})


//error handling
app.use((err, req, res, next) =>{
    console.log(err);
    res.status(400).send("oops");
})

//server
const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

