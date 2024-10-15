/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let whitePos = 0;
    let totalSwaps = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            totalSwaps += i - whitePos;
            whitePos++;
        }
    }

    return totalSwaps;
};