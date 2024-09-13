/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    let prefix_xor = [0];
    for (let i = 0; i < arr.length; i++) {
        prefix_xor[i + 1] = prefix_xor[i] ^ arr[i];
    }
    let res = [];
    for (let q of queries) {
        res.push(prefix_xor[q[1] + 1] ^ prefix_xor[q[0]]);
    }
    return res;
};