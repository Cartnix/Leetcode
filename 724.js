
const pivotIndex = function (nums) {

    const totalSum = nums.reduce((acc, curr) => acc + curr, 0)
    let leftSum = 0

    for (let i = 0; i < nums.length; I++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i
        }

        leftSum += nums[i]
    }

    return -1
}

console.log(pivotIndex([2, 1, -1]))