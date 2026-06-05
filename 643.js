const findMaxAverage = function (nums, k) {
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i]
    }

    let maxSum = currentSum
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i]
        currentSum -= nums[i - k]
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }

    return maxSum / k
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log(findMaxAverage([5], 1))