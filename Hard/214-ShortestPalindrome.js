/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let slen = s.length;
    if (slen === 0) return '';

    let left = 0;
    for (let right = slen - 1; right >= 0; right--) {
        if (s[right] == s[left]) left++;
    }

    if (left == slen) return s;
    let sfx = s.substring(left)
    let revSfx = sfx.split('').reverse().join('');
    return revSfx + shortestPalindrome(s.substring(0, left)) + sfx;
};