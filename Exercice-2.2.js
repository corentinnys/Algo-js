//Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.


const readlineSync = require("readline-sync");
let minAge = readlineSync.question(" min age ?");
let maxAge = readlineSync.question("max age");
let currentAge = readlineSync.question("current age");

// Bonus 1
if(minAge>maxAge){
    console.log('tu ne comprend pas le programe');
}

if (currentAge>=minAge &&  currentAge<maxAge)
{
    console.log("l'age courant"+currentAge);
}

