/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let minutes = [];

    for (let i = 0; i < timePoints.length; i++) {
        let hm = timePoints[i].split(':').map(elm => parseInt(elm));
        minutes[i] = hm[0] * 60 + hm[1];
    }

    minutes.sort((a, b) => a - b);
    let ans = Number.MAX_VALUE;

    for (let i = 0; i < timePoints.length - 1; i++) {
        ans = Math.min(ans, minutes[i + 1] - minutes[i]);
    }
    
    return Math.min(ans, 24 * 60 - minutes[minutes.length - 1] + minutes[0]);
};