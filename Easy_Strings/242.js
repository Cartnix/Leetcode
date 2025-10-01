const Anamorphem = (s, t) => {
    let newS = s.toLowerCase().split('')
    let newT = t.toLowerCase().split('')

    if (newS.length !== newT.length) {
        return false
    }

    for (let i = 0; i < newS.length; i++) {
        let found = false
        for (let j = 0; j < newT.length; j++) {
            if (newS[i] === newT[j]) {
                newT.splice(j, 1)
                found = true
                break
            }
        }
        if (!found) {
            return false
        }
    }


    return true
}

console.log(Anamorphem('car', "rat"))   // Пиздец долго

