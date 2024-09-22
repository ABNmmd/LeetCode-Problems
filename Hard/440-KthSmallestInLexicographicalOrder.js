/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    let curr = 1;
    k--;

    while (k > 0) {
        let steps = cntSteps(n, curr, curr + 1);
        if (steps <= k) {
            curr++;
            k -= steps;
        } else {
            curr *= 10;
            k--;
        }
    }
    return curr;
};

var cntSteps = function (n, prefx1, prefx2) {
    let steps = 0;
    while (prefx1 <= n) {
        steps += Math.min(n + 1, prefx2) - prefx1;
        prefx1 *= 10;
        prefx2 *= 10;
    }
    return steps;
}