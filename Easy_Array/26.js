const deleteNum = (nums) => {
    if(nums.length === 0) return 0

    let unique = 1
    for(let read = 0; read < nums.length; read++)
    {
        if(nums[read] !== nums[unique - 1])
        {
            nums[unique] = nums[read]
            unique++
        }
    }

    return unique
}

console.log(deleteNum([0,0,1,1,1,2,2,3,3,4]))