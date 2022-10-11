const express = require('express');

const app = express();

const fact2 = (inp) => {
    let total = 1;
    let i = 2;
    while (i <= inp) {
        total = i * total;
        if (total == inp) {
            return i;
            break;
         } else if (total < inp) {
            i++;
         } else if (total > inp) {
            return "this is not a factorial";
            break;
        }
    }
}

const bfact = (inp) => {
    divide
}

const fact = (inp) => {
    let total = 1;
    let i = 2;
    if (Number.isInteger = false){
        return "This is not a factorial"
        break;
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

console.log(fact(120), fact2(120));

const server = app.listen(1296, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});