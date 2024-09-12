/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let XORres = start ^ goal;
    let cnt = 0;
    while (XORres) {
        XORres &= XORres - 1;
        cnt++;
    }
    return cnt;
};