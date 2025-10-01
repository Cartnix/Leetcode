const Arab = (s) => {
    const RomantoInterMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])

    let totalValue = 0
    let PrevValue = 0

    for(let i = s.length - 1; i >= 0; i-- )
    {
        const char = s[i]
        const romanValue = RomantoInterMap.get(char)

        if(PrevValue > romanValue)
        {
            totalValue -= romanValue
        } else{
            totalValue += romanValue
        }

        PrevValue = romanValue
    }

    return totalValue

}

console.log(Arab('XX'))