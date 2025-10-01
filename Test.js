const twoSum = (arr, target) =>
{
    const NumMap = new Map()

    for(let i = 0; i < arr.length; i++)
    {
        const Find = target - arr[i]
        if(NumMap.has(Find))
        {
            return [NumMap.get(Find), i]
        }

        NumMap.set(arr[i], i)
    }

    return null
}

console.log(twoSum([3,4,5,6], 7))