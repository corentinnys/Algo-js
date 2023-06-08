//Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync");
let number_1 = readlineSync.question("first number?");
let number_2 =  readlineSync.question("second number?");
let result = number_1%number_2;
console.log(result);