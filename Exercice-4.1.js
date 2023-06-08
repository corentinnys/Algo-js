// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.


const readlineSync = require("readline-sync");
function calcSurface(largeur,longueur)
{
    return largeur*longueur;
}


let largeur = readlineSync.question("largeur? ");
let longueur = readlineSync.question("longueur? ");

let result = calcSurface(largeur,longueur);
console.log(result);