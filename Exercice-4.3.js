// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.
function rand10()
{
    return Math.ceil(Math.random()*10)
}

function multiRand(n) {
    array=[];
    let i = 0;
    while (i<n)
    {
        array.push(rand10())
        i++;
    }
    return array;
}

let result = multiRand(3);
console.log(result);