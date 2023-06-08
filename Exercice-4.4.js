function average(array)
{

    let sum = 0;
    for (let items of array)
    {
        sum+=items;
    }
    return  sum/array.length;
}

function min(arr)
{

    return Math.min(...arr);

}

function max(arr)
{
    return Math.max(...arr);
}

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
console.log(min(result));
console.log(max(result));
console.log('moyenne '+average(result));

/*let minimun= min(...result);
let maximun =max(... result);
let moyenne =average(result)*/
console.log(result)
/*console.log(minimun)
console.log(maximun)*/
//console.log(moyenne)