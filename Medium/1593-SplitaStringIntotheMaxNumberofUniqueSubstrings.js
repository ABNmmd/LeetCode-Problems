/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    let seen = new Set();
    return backtrack(s, 0, seen);
};

var backtrack = function (s, start, seen) {
    if (start == s.length) return 0;
    let maxCnt = 0;

    for (let end = start + 1; end <= s.length; end++) {
        let subStr = s.substring(start, end);
        if (!seen.has(subStr)) {
            seen.add(subStr);
            maxCnt = Math.max(maxCnt, 1 + backtrack(s, end, seen));
            seen.delete(subStr);
        }
    }
    return maxCnt;
}