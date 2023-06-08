//Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

function rand10()
{
   return Math.ceil(Math.random()*10)
}

let result = rand10();
console.log(result);