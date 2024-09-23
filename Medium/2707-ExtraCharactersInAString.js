/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const n = s.length;
    const dicSet = new Set(dictionary);

    let dp = new Array(n + 1).fill(0);

    for (let st = n - 1; st >= 0; st--) {
        let cur = '';
        dp[st] = dp[st + 1] + 1;

        for (let e = st; e < n; e++) {
            cur += s[e];
            if (dicSet.has(cur)) {
                dp[st] = Math.min(dp[st], dp[e + 1]);
            }
        }
    }
    
    return dp[0];
};
