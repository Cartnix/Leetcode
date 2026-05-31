const threeSum = function (nums) {

    nums.sort((a, b) => a - b)

    let answ = [];
    let target = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        target = 0 - nums[i]
        left = i + 1
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let right = nums.length - 1
            while (left < right) {
                let sum = nums[left] + nums[right]
                if (sum === target) {
                    answ.push([0 - target, nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }

                    left++
                    right--
                } else if (sum > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }

    return answ
}

console.log(threeSum([-1,0,1,2,-1,-4]))