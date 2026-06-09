const minLeng = (nums, target) => {
    let minSum = Infinity;
    let currMin = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currMin += nums[right];
        while (currMin >= target) {
            let distance = right - left + 1
            minSum = Math.min(minSum, distance)

            currMin -= nums[left]
            left++
        }
    }

    return minSum === Infinity ? 0 : minSum
}

console.log(minLeng([2, 3, 1, 2, 4, 3], 7)) // 2
console.log(minLeng([1, 4, 4], 4)) // 1
console.log(minLeng([1, 1, 1, 1, 1, 1, 1, 1], 11)) // 0