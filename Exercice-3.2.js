//Write a program that will calculate the average value of a given array

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let items of array)
{
   sum+=items;
}
let result=sum/array.length
console.log(result);