const express = require('express');

const app = express();

const fact2 = (inp) => {
    let total = 1;
    let i = 1;
    while (i <= inp) {
        total = i * total;
        if (total == inp) {
            return i;
         } else if (total < inp && inp>0 && inp%total == 0) {
            i++;
         } else {
            return "this is not a factorial";
        }
    }
}

const fact = (inp) => {
    let total = 1;
    let i = 1;
    if (Number.isInteger = false || inp <= 0 ){
        return "This is not a factorial"
    }
    else{
        while (i <= inp) {
         if (inp%i == 0){
            total = total * i;
            if (total == inp) {
                return i;
                break;
            }
            else{
                i++;
            }
        }else {
            return "This is not a factorial";
            break;
        }
    }
    } 
};

// const fact3 = (inp) =>{
//     let divider = 1;

//     while (total > 1) {
//         divider ++;

//         total /= divider;
//     }

//     return total == 1 ? divder + "1" : "NONE";
// } 

// for(let i )

console.log(fact(-120), fact2(120));

module.exports = {
    fact,
    fact2
}

const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});