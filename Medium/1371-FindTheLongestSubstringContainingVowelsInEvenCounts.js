/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    let prefixXOR = 0;
    let characterMap = new Array(26).fill(0);
    characterMap['a'.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
    characterMap['e'.charCodeAt(0) - 'a'.charCodeAt(0)] = 2;
    characterMap['i'.charCodeAt(0) - 'a'.charCodeAt(0)] = 4;
    characterMap['o'.charCodeAt(0) - 'a'.charCodeAt(0)] = 8;
    characterMap['u'.charCodeAt(0) - 'a'.charCodeAt(0)] = 16;
    let mp = new Array(32).fill(-1);
    let longestSubstring = 0;
    for (let i = 0; i < s.length; i++) {
        prefixXOR ^= characterMap[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        if (mp[prefixXOR] == -1 && prefixXOR !== 0) mp[prefixXOR] = i;
        longestSubstring = Math.max(longestSubstring, i - mp[prefixXOR])
    }
    return longestSubstring;
};