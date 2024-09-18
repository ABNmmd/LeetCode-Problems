/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let stringArr = nums.map(el => el.toString());

    stringArr.sort(
        (a, b) => {
            return a + b < b + a ? 1 : -1;
        }
    );
    
    return stringArr[0] !== '0' ? stringArr.join('') : '0';
};