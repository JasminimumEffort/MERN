'use strict';

console.log("Hello friends");

const{add, subt, mult, div, pow} = require("./maths"); //import functions from maths.js

console.log("2 + 2 =",add(2,2));


console.log("6 - 1 =",subt(6,1));


console.log("3 * 9 =",mult(3,9));


console.log("18 / 6 =",div(18,6));


console.log("4^3=",pow(4,3));

const getPoke = require("./poke");

getPoke();