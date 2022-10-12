const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("../index"); // imports the server so I can run it in the test and send requests to it

describe("dog tests", () => {
    it("should create a dog", (done) => {
        const newDog = {
            "name": "Percy"
        }
        chai.request(server).post("/newDog").send(newDog).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newDog);
            done(); //tells mocha the test has finished
        });
    });
    it("should replace a dog using .json", (done) => {
        const newDog = {
            "name": "Skye"
        }
        chai.request(server).patch("/newVetRecords/63468014f0b517dbe59ad6b8").send(newDog).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(newDog);
            done(); //tells mocha the test has finished
        });
    });
    it("should get all of the dogs", (done) => {
        chai.request(server).get("/getAll").send().end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.not.be.null;
            done(); //tells mocha the test has finished
        });

    });
    it("should get a dog by the ID", (done) => {
        const newDog = {
            "name": "Percy"
        }
        chai.request(server).get("/petDog/63468014f0b517dbe59ad6b8").send().end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(newDog);
            done(); //tells mocha the test has finished
        });
    });
    it("should send a dog home from its walk", (done) => {
        chai.request(server).delete("/petDog/63468014f0b517dbe59ad6b8").send().end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(newDog);
            done(); //tells mocha the test has finished
        });
    });
})