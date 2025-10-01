// const reversedword = (word) => {
//     let chars = word.split('');
//     let left = 0;
//     let right = chars.length - 1;
//     while (left < right) {
//         [chars[left], chars[right]] = [chars[right], chars[left]];
//         left++;
//         right--;
//     }
//     return chars.join('');
// }

// const reverseWords = (str) => {
    // const words = str.split(' ');
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = reversedword(words[i]);
    // }
    // return words.join(' ');
// }

// console.log(reverseWords('Hello World !'))

const reversedWord = (str) =>
{
    let word = str.split(' ')
    for(let i = 0; i < word.length; i++)
    {
        word[i] = word[i].split('').reverse().join('')
    }
    return word.join(' ')
}