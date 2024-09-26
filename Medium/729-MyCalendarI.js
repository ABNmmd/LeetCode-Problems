
var MyCalendar = function () {
    this.calendar = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

MyCalendar.prototype.book = function (start, end) {
    for (let [s, e] of this.calendar) {
        if (s < end && start < e) return false;
    }
    this.calendar.push([start, end]);
    return true;
};
