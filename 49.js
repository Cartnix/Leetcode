const groupAnagrams = function (strs) {
    const map = new Map();

    for(let str of strs) {
        const arr = new Array(26).fill(0)
        for(let char of str) {
            arr[char.charCodeAt - 97]++
        }

        let key = arr.join('#')

        if(!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(arr)
    }

    return Array.from(map.values())
    
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))