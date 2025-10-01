const isEqual = (s, t) => {
    let letterMap = new Map()

    const letters = s.split('')
    const lettersT = t.split('')

    for (let letter of letters) {
        if (!letterMap.has(letter))
        {
             letterMap.set(letter, 1)
        }
        else{
            letterMap.set(letter, letterMap.get(letter) + 1)
        }
    }

    for(let letterT of lettersT)
    {
        if(!letterMap.has(letterT) || letterMap.get(letterT) === 0)
        {
            return letterT
        }
        letterMap.set(letterT, letterMap.get(letterT) - 1)
    }

}

console.log(isEqual('abcd', 'avbcd'))