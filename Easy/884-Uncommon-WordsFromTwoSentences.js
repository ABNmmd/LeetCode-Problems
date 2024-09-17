/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let allWords = [...s1.split(' '), ...s2.split(' ')];
    let wordCount = {};

    for (let word of allWords) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    let ans = [];
    for (let word in wordCount) {
        if (wordCount[word] === 1) {
            ans.push(word);
        }
    }
    return ans;
};