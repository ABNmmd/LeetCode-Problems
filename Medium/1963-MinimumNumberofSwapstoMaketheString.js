/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let stackSize = 0;
    for (c of s) {
        if (c == '[') stackSize++
        else {
            if (stackSize > 0) stackSize--;
        };
    }
    return Math.floor((stackSize + 1) / 2);
};