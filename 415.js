const addStrings = function (str1, str2) {
    const result = [];

    let left = str1.length - 1;
    let right = str2.length - 1;
    let carry = 0;

    while (left >= 0 || right >= 0 || carry > 0) {
        let digit1 = left >= 0 ? parseInt(str1[left]) : 0;
        let digit2 = right >= 0 ? parseInt(str2[right]) : 0;

        let sum = digit1 + digit2 + carry
        result.push(sum % 10);

        carry = Math.floor(sum / 10);

        left--
        right--
    }

    return result.reverse().join('')
};

console.log(addStrings("11", "123")) // "134"
console.log(addStrings("456", "77")) // "533"