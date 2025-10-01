// const containsNearbyDuplicate = (nums, k) => {
//     const lastSeenIndexMap = new Map(); 

//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i]; 
//         if (lastSeenIndexMap.has(currentNum)) {
//             const prevIndex = lastSeenIndexMap.get(currentNum); 

//             if (Math.abs(i - prevIndex) <= k) {
//                 return true; 
//             }
//             lastSeenIndexMap.set(currentNum, i);
//         } else {
//             lastSeenIndexMap.set(currentNum, i);
//         }
//     }

//     return false;
// };

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));    // Ожидаем: true
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));    // Ожидаем: true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Ожидаем: false
// console.log(containsNearbyDuplicate([1, 1], 0));        // Ожидаем: false (abs(1-0)=1, не <= 0)
// console.log(containsNearbyDuplicate([], 5));            // Ожидаем: false
// console.log(containsNearbyDuplicate([1,2,3], 100));     // Ожидаем: false
// console.log(containsNearbyDuplicate([4,1,2,3,1,5], 3)); // Ожидаем: true
// console.log(containsNearbyDuplicate([1,2,3,1], 3));


// 1 2 1 2 3 4


/* 
Input: nums = [1,2,3,1], k = 3
Output: true
*/


const containsNearbyDuplicate = (arr, k) =>
{
    const unique_numbers = new Set()

    for(let i = 0; i < arr.length; i++)
    {
        if(unique_numbers.has(arr[i]))
        {
            return true
        } 
        unique_numbers.add(arr[i])
        if(i >= k)
        {
            unique_numbers.delete(arr[i - k])
        }
    }
    return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));    // Ожидаем: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));    // Ожидаем: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Ожидаем: false
console.log(containsNearbyDuplicate([1, 1], 0));        // Ожидаем: false (abs(1-0)=1, не <= 0)
console.log(containsNearbyDuplicate([], 5));            // Ожидаем: false
console.log(containsNearbyDuplicate([1,2,3], 100));     // Ожидаем: false
console.log(containsNearbyDuplicate([4,1,2,3,1,5], 3)); // Ожидаем: true
console.log(containsNearbyDuplicate([1,2,3,1], 3));