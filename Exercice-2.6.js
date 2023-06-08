//Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond.

let week=['Monday','thuesday','Wednesday','Thursday','Friday','Saturday','sunday'];
const readlineSync = require("readline-sync");
let number = readlineSync.question("number? ");
console.log(week[number-1]);
