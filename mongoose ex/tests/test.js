const {fact} = require("./fact");
const { expect } = require("chai");

describe("factorial tests", () => { // set of tests
    it("should equal 5", () => { // single test
        expect(fact(120)).to.equal(5);

        // expect:
        // if (sum(1,1) === 2) {
        //     pass();
        // } else {
        //     fail();
        // }
     })
     it("should fail", () => {
        expect(sum(120)).to.equal(6);
     })
});