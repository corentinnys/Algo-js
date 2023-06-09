// {\displaystyle S_{n}=S_{n-1}+S_{n-2}},

function fibonacci(n)
{
    let sum =[];
    sum[0] = 0;
    sum[1] = 1;
    for (let i=2;i<=n;i++)
    {
        sum[i] = sum[i-2]+sum[i-1]
        
    }
    return sum;
}


console.log(fibonacci(5));