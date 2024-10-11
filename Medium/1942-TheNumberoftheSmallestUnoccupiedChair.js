/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let n = times.length;
    let events = [];

    for (let i=0; i<n; i++) {
        events.push([times[i][0], i]);
        events.push([times[i][1], ~i]);
    }

    events.sort((a, b) => a[0] - b[0]);

    let availableChairs = Array.from({ length: times.length }, (_, i) => i);
    let occupiedChairs = [];

    for (let [time, friend] of events) {
        while (occupiedChairs.length && occupiedChairs[0][0] <= time) {
            let [, chair] = occupiedChairs.shift();
            availableChairs.push(chair);
            availableChairs.sort((a, b) => a - b);
        }

        if (friend >= 0) {
            let chair = availableChairs.shift();
            if (friend === targetFriend) {
                return chair; 
            }
            occupiedChairs.push([times[friend][1], chair]); 
            occupiedChairs.sort((a, b) => a[0] - b[0]);
        }
    }
    return -1;
}