const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => res.send(`Hello my name is!`));

let names = ['James', 'Brandon', 'Steve', 'Jordan', 'Harry'];


app.get('/getAll', (req, res) => {
    res.send(names)
});


app.get("/get/:id", (req, res) => {
    res.send(names[req.params.id]);
});

app.delete("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1));
    //console.log(req.params.id);
    //res.send();
});


//go to postman and post with a json file that I made using the above json activation

app.use(express.json());

app.post('/create', (req,res) => {
    const name = req.body.name;
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


const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});
