const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("../index"); // imports the server so I can run it in the test and send requests to it

const { dogModel } = require("../myexdb");

describe("dog tests", () => {
    
    let goodDog;
    
    beforeEach(async () => {
        try{
            await dogModel.deleteMany({});
            goodDog = await dogModel.create({
            "name": "Poppy"
            });
            goodDog = JSON.parse(JSON.stringify(goodDog));
            console.log();
        } catch(err) {
            console.error(err);
        }
    });
    
    it("should create a dog", (done) => {
        const newDog = {
            "name": "Bess"
        }
        chai.request(server).post("/newDog").send(newDog).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newDog);
            done(); //tells mocha the test has finished
        });
    });
    it("should replace a dog using .json", (done) => {
        const newDog1 = {
            "name": "Skye"
        }
        chai.request(server).patch("/newVetRecords/" + goodDog._id).send(newDog1).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(newDog1);
            done(); //tells mocha the test has finished
        });
    });
    it("should replace a dog using URL", (done) => {
        const newDog3 = {
            "name":"Skye"
        }
        chai.request(server).patch("/newCollar/" + goodDog._id + "?name=Skye").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(newDog3);
            done(); //tells mocha the test has finished
        });
    });
    it("should get all of the dogs", (done) => {
        chai.request(server).get("/getAll").send().end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(goodDog);
            done(); //tells mocha the test has finished
        });

    });
    it("should get a dog by the ID", (done) => {
        chai.request(server).get("/petDog/" + goodDog._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(goodDog);
            done(); //tells mocha the test has finished
        });
    });
    it("should send a dog home from its walk", (done) => {
        chai.request(server).delete("/sendHome/" + goodDog._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.be.not.null;
            done(); //tells mocha the test has finished
        });
    });
})