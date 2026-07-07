const maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    let maxArea = 0;

    while (left < right) {
        area = Math.min(height[left], height[right]) * (right - left)
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }

        if(maxArea < area) {
            maxArea = area
        }
    }

    return maxArea
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1