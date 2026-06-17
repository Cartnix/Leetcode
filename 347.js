const topKFrequent = function(nums, k) {
    const map = new Map();
    const res = [];
    for(let num of nums) {
        if(!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }

    const sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1])

    for(let i = 0; i < k; i++) {
        res.push(sorted[i][0])
    }

    return res

};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]