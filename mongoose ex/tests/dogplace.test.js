const {expect} = require("chai");

const {dogPlace} = require("../dogPlace.js")

describe("dog Place tests", () => { 
    it("should have a length of 99", () => {
        expect(dogPlace(20).length).to.equal(99);
    });
    it("should NOT contain 37th", () => {
        expect(dogPlace(37)).to.not.include("37th");
    });
    it("should have 11th", () => {
        expect(dogPlace(33)).to.include("11th");
    });
})