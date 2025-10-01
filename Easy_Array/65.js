const plusOne = (digits) =>
{
    let num = digits.join('')
    return (BigInt(num) + 1n).toString().split('').map(Number)
}

console.log(plusOne([1,2,3]))