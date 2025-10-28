/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = (words, x) => {
    const array = [];
    for (let i = 0; i < words.length; i++) words[i].includes(x) ? array.push(i) : 0;
    return array;
};