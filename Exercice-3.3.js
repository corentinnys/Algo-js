//Write a program that will create a duplicate of a given array.

let array = [1, 2, 3, 4, 5];
let copyarray = [];

for(items of array){
    copyarray.push(items);
}
console.log(array);
console.log(copyarray);