const topKFrequent = function(nums, k) {
    const map = new Map()
    for(let num of nums) {
        if(!map.has(num)) {
            map.set(num, 0)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }

    return map

};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]