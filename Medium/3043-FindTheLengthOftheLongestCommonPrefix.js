/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    let arr1_prefixes = new Set();

    for (val of arr1) {
        while (!arr1_prefixes.has(val) && val > 0) {
            arr1_prefixes.add(val);
            val = Math.floor(val / 10);
        }
    }
    let longestPrefix = 0;
    for (val of arr2) {
        while (!arr1_prefixes.has(val) && val > 0) {
            val = Math.floor(val / 10);
        }
        if (val > 0) {
            longestPrefix = Math.max(longestPrefix, String(val).length);
        }
    }
    return longestPrefix;
};