/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
    let events = [];

    for (let interval of intervals) {
        events.push([interval[0], 1]);
        events.push([interval[1] + 1, -1]);
    }

    events.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    let concurrentIntervals = 0;
    let maxConcurrentIntervals = 0;

    for (let event of events) {
        concurrentIntervals += event[1];
        maxConcurrentIntervals = Math.max(maxConcurrentIntervals, concurrentIntervals);
    }

    return maxConcurrentIntervals;
};