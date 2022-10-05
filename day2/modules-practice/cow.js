const cows = require("cowsay");

function cowGen() {

        const randomCowLetter = "bdgpstwy";

        return randomCharacter = randomCowLetter[Math.floor(Math.random() * randomCowLetter.length)]
}

const speakCows = (inp) => cows.say({
    text : inp,
    e : "oO",
    T : "U "
})

const faceCows = (words) => cows.think({
    text: words,
    // b: true
    // d: true
    // g: true
    // p: true
    // s: true
    t: false
    // w: false
    // y: false 
})


const randomCows = (words) => cows.say({
    text: words,
    r: true
})



const thinkCows = (words) => cows.think({
    text: words,
    e: "--",
    T: "P"
});

module.exports = {
    speakCows,
    thinkCows,
    randomCows,
    faceCows
};

console.log(speakCows("Moo"));