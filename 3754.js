const sumAndMultiply = function removeZeros(num) {
    let result = 0;
    let multiplier = 1;
    let multNum = 0;

    while (num > 0) {
        let digit = num % 10;
        if (digit !== 0) {
            result = digit * multiplier + result;
            multiplier *= 10;
        }
        multNum += digit
        num = Math.floor(num / 10);
    }
    return result * multNum;
}

console.log(sumAndMultiply(10203004)) // 12340
console.log(sumAndMultiply(1000)) // 1