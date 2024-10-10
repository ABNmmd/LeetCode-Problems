/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    let n = nums.length;
    let indices = Array.from({ length: n }, (_, i) => i);

    indices.sort((a, b) => nums[a] - nums[b] || a - b);

    let minIndex = n;
    let maxWidth = 0;

    for (let i of indices) {
        maxWidth = Math.max(maxWidth, i - minIndex);
        minIndex = Math.min(minIndex, i);
    }

    return maxWidth;
};