/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let curra = 0;
    let currb = 0;
    let currc = 0;
    let totalIter = a + b + c;
    let ans = [];

    for (let i = 0; i < totalIter; i++) {
        if ((a >= b && a >= c && curra != 2) || (a > 0 && (currb == 2 || currc == 2))) {
            ans.push('a');
            a--; curra++;
            currb = 0; currc = 0;
        } else if ((b >= a && b >= c && currb != 2) || (b > 0 && (curra == 2 || currc == 2))) {
            ans.push('b');
            b--; currb++;
            curra = 0; currc = 0;
        } else if ((c >= a && c >= b && currc != 2) || (c > 0 && (curra == 2 || currb == 2))) {
            ans.push('c');
            c--; currc++;
            curra = 0; currb = 0;
        }
    }
    return ans.join('');
};