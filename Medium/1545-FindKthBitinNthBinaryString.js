/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    let invertCnt = 0;
    let len = 2 ** n - 1;

    while (k > 1) {
        if (k == Math.floor(len / 2) + 1) return invertCnt % 2 == 0 ? '1' : '0';

        if (k > Math.floor(len / 2)) {
            k = len + 1 - k;
            invertCnt++;
        }

        len = Math.floor(len / 2);
    }

    return invertCnt % 2 == 0 ? '0' : '1';
};