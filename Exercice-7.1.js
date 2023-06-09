const readlineSync = require("readline-sync");
function numberAleatoir()
{
    return Math.ceil(Math.random()*5);
}

let number = numberAleatoir();
let response = readlineSync.question("Devinez le nombre ");

while (number!=response)
{
    if(response>number)
    {
        console.log('trop grand')
        response = readlineSync.question("Devinez le nombre ");
    }else {
        console.log('trop petit')
        response = readlineSync.question("Devinez le nombre ");
    }
}
console.log('Bien devine');