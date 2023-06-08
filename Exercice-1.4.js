//Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.
const readlineSync = require("readline-sync");
let name = readlineSync.question("What's your lastName?");
let firstName =readlineSync.question("What's your firstName?");;
let city = readlineSync.question("What's your city ?");;
console.log( "Vous vous appelez "+name+" "+firstName+" et vous habitez à "+city+".");
