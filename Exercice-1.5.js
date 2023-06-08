//Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.
//You will have to perform a search on Google to know how to only keep the integer part of a number.

const readlineSync = require("readline-sync");
let number_1 = readlineSync.question("first number?");
let number_2 = Math.trunc( readlineSync.question("second number?"));
console.log("le premier nombre est "+ number_1);
console.log("le second nombre est "+ number_2);