// const findMedianSortedArrays = function (nums1, nums2) {
//     const newArr = [...nums1, ...nums2].sort((a, b) => a - b)
//     let mid = Math.floor(newArr.length / 2)
//     if (newArr.length % 2 === 1) {
//         return newArr[mid]
//     } else {
//         return (newArr[mid - 1] + newArr[mid]) / 2
//     }
// };

const findMedianSortedArrays = function (nums1, nums2) {
    let left = 0;
    let right = 0;
    let newArray = [];

    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] < nums2[right]) {
            newArray.push(nums1[left]);
            left++;
        } else {
            newArray.push(nums2[right]);
            right++;
        }
    }

    while (left < nums1.length) {
        newArray.push(nums1[left]);
        left++;
    }

    while (right < nums2.length) {
        newArray.push(nums2[right]);
        right++;
    }

    let mid = Math.floor(newArray.length / 2);

    if (newArray.length % 2 !== 0) {
        return newArray[mid];
    } else {
        return (newArray[mid - 1] + newArray[mid]) / 2;
    }
}

console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
