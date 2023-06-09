function trie(arr){
    let fini = false;
    while (!fini) {
          fini = true;
        for (let i = 1;i<arr.length;i++)
        {
            if(arr[i-1]> arr[i])
            {
             fini = false;
             let temp = arr[i-1];
             arr[i-1] = arr[i];
             arr[i]=temp
            }
        }
    }
    return arr;
}
 console.log(trie([2,4,5,1]));
console.log(trie(['test','corentin']));