const twoSum = function (nums, target) {
    let p1 = 0
    let p2 = nums.length - 1

    while (p1 < p2) {
        if (nums[p1] + nums[p2] === target) {
            return [p1 + 1, p2 + 1]
        }

        if (nums[p1] + nums[p2] < target) {
            p1++
        } else if (nums[p1] + nums[p2] > target) {
            p2--
        }
    }

};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))