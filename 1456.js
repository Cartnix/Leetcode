const maxVowels = function (s, k) {
    const vowels = 'aeiou'
    vowelNum = 0
    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            vowelNum++
        }
    }

    let maxVowelCount = vowelNum;

    for (let right = k; right < s.length; right++) {
        let left = right - k;

        if (vowels.includes(s[right])) {
            vowelNum++
        }
        if (vowels.includes(s[left])) {
            vowelNum--
        }
        if (vowelNum > maxVowelCount) {
            maxVowelCount = vowelNum
        }

    }
    return maxVowelCount

};

console.log(maxVowels("abciiidef", 3))
console.log(maxVowels("aeiou", 2))