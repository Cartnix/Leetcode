const ZigZag = (word, rows) => {
    const ZigArr = Array.from({ length: rows }, () => [])
    const letters = word.split('')

    let currentRow = 0
    let movingDown = true
    for (letter of letters) {
        ZigArr[currentRow].push(letter)

        if(movingDown)
        {
            if(currentRow < rows - 1)
            {
                currentRow++
            } else{
                movingDown = false
                currentRow--
            }
        } else{
            if(currentRow > 0)
            {
                currentRow--
            } else{
                movingDown = true
                currentRow++
            }
        }
        
    }

    return ZigArr.map(row => row.join('')).join('')

}

console.log(ZigZag("PAYPALISHIRING", 4))

//


//PAYPALISHIRING
// [0 0]           [0 3]         [0 6]
// [1 0]      [1 2][1 3]    [1 5][1 6]
// [2 0] [2 1]     [2 3][2 4]
// [3 0]           [3 3]
/*

P     I    N
A   L S  I G
Y A   H R
P     I

*/