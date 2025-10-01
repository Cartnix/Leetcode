// // const insert = (arr, num) => {

// //     if(arr.length === 0 || num <= arr[0])
// //     {
// //         return 0
// //     }

// //     for (let i = 0; i < arr.length; i++) {
// //         if(arr[i] === num)
// //         {
// //             return i
// //         }
// //         if(arr[i] < num && (arr[i+1] > num || i === arr.length - 1))
// //         {
// //             return i+1
// //         }
// //     }

// //     return arr.length
// // }

// // console.log(insert([1,3,5,6], 7))


// const insert = (arr, num) => {
//     let left = 0
//     let mid
//     let right = arr.length - 1

//     while (left <= right) {
//         mid = Math.floor((left + right) / 2)

//         let guess = arr[mid]
//         if (guess === num) {
//             return mid
//         } else if (guess < num) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }

//     return left > right ? right + 1 : left - 1
// }

// console.log(insert([1,3,5,6], 7))


const isPolindrome = (s, rows) => {
    const ZigArr = Array.from({length: rows}, () => [])
    if(s.length === 0 || rows === 0)
    {
        return ""
    }
    if(s.length === 1 || rows === 1)
    {
        return s
    }

    let isDown = false
    let CurrentRow = 0
    for(let i = 0; i < s.length; i++)
    {
        ZigArr[CurrentRow].push(s[i])

        if(CurrentRow === 0 || CurrentRow === rows - 1)
        {
            isDown = !isDown
        }

        if(isDown)
        {
            CurrentRow++
        } else{
            CurrentRow--
        }
    }

    return ZigArr.map(letter => letter.join('')).join('')

}

console.log(isPolindrome("PAYPALISHIRING", 3))