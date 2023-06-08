//Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all thenumbers collected this way.

const readlineSync = require("readline-sync");
let number = readlineSync.question("number? ");
let result=0;
for (let i =0; i<= number;i++)
{
   result += i;
}

console.log(result);