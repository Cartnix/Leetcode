const minimumDifference = function(nums, k) {
    nums.sort((a,b) => a - b)
    let minDiff = Infinity

    for(let right = k - 1; right < nums.length; right++) {
        let left = right - (k - 1)
        if(nums[right] - nums[left] < minDiff) {
            minDiff = nums[right] - nums[left]
        }
    }

    return minDiff
};

console.log(minimumDifference([90], 1))
console.log(minimumDifference([9,4,1,7], 2))