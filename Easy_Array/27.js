const removeEl = (arr, elem) =>
{
    for(let i = arr.length - 1; i >= 0; i--)
    {
        if(arr[i] === elem)
        {
            arr.splice(i,1)
        }
    }
    return arr.length
}

console.log(removeEl([1,2,2,3,4], 2))