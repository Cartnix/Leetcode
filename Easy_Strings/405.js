const Hexagon = (Cnum) => {

    const LetterMap = new Map([
        [10, 'a'],
        [11, 'b'],
        [12, 'c'],
        [13, 'd'],
        [14, 'e'],
        [15, 'f'],
    ])

    const HexNum = []

    let num = Cnum

    if(num == 0)
    {
        return "0"
    }

    if(num < 0)
    {
        num = num >>> 0
    }

    while (num / 16 > 0) {

        LetterMap.has(num % 16) ? HexNum.push(LetterMap.get(num % 16)) : HexNum.push(num % 16)

        num = Math.floor(num / 16)

    }


    return HexNum.reverse().join('')
}