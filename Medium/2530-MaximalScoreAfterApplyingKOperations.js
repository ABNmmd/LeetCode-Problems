/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let ans =0;
    let pq = new MaxPriorityQueue({ compare: (a, b) => b - a });

    for (let num of nums) {
        pq.enqueue(num);
    }

    while(k) {
        const el = pq.dequeue();
        ans += el;
        pq.enqueue(Math.ceil(el/3));
        k--;
    }
    return ans;
};