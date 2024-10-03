/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let n = nums.length;
    let totalSum = 0;

    for (num of nums) {
        totalSum += num;
    }
    
    let target = totalSum % p;
    if (target == 0) return 0;

    let modMap = new Map();
    modMap.set(0, -1)
    let curntSum = 0;
    let minLen = n;

    for (let i=0; i<n; i++) {
        curntSum = (curntSum + nums[i]) % p;

        needed = (curntSum - target + p) % p;

        if (modMap.has(needed)) {
            minLen = Math.min(minLen, i - modMap.get(needed));
        }
        modMap.set(curntSum, i);
    }
    return minLen == n ? -1 : minLen;
};