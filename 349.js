const intersection = function (nums1, nums2) {
    const lookUp = new Set([...nums1])

    return [...new Set(nums2.filter(num => lookUp.has(num)))]
};

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))