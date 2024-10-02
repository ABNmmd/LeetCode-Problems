/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let numRank = {};
    let sortedArr = [...arr].sort((a, b) => a-b);
    let rank = 1;

    for (let i=0; i<sortedArr.length; i++) {
        if (i>0 && sortedArr[i] > sortedArr[i-1])
            rank++;
        numRank[sortedArr[i]] = rank;
    }

    return arr.map(num => numRank[num]);
};