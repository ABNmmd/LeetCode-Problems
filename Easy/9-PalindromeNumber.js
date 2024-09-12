/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x != 0)) return false;
    let org = x;
    let rev = 0;
    while (org > 0) {
        rev = (rev * 10) + (org % 10);
        org = Math.floor(org / 10);
    }

    return x === rev;
};