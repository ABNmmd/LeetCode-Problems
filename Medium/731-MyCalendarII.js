
var MyCalendarTwo = function () {
    this.bookingCount = new Map();
    this.maxOverlappedBooking = 2;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    this.bookingCount.set(start, (this.bookingCount.get(start) || 0) + 1);
    this.bookingCount.set(end, (this.bookingCount.get(end) || 0) - 1);

    let overlapped_booking = 0;
    let sortedKeys = Array.from(this.bookingCount.keys()).sort((a, b) => a - b);

    for (let key of sortedKeys) {
        overlapped_booking += this.bookingCount.get(key);

        if (overlapped_booking > this.maxOverlappedBooking) {

            this.bookingCount.set(start, this.bookingCount.get(start) - 1);
            this.bookingCount.set(end, this.bookingCount.get(end) + 1);

            if (this.bookingCount.get(start) === 0) {
                this.bookingCount.delete(start);
            }

            if (this.bookingCount.get(end) === 0) {
                this.bookingCount.delete(end);
            }

            return false;
        }
    }
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */