var Node = function (val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
};

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.size = 0;
    this.maxSize = k;
    this.head = null;
    this.rear = null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) {
        return false
    } else if (this.head === null) {
        this.head = new Node(value, null, null);
        this.rear = this.head;
    } else {
        let newHead = new Node(value, this.head, null);
        this.head.prev = newHead;
        this.head = newHead;
    }
    this.size++;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) {
        return false;
    } else if (this.head === null) {
        this.head = new Node(value, null, null);
        this.rear = this.head;
    } else {
        this.rear.next = new Node(value, null, this.rear);
        this.rear = this.rear.next;
    }
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) {
        return false;
    } else if (this.size === 1) {
        this.head = null;
        this.rear = null
    } else {
        this.head = this.head.next;
    }
    this.size--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) {
        return false;
    } else if (this.size === 1) {
        this.head = null;
        this.rear = null
    } else {
        this.rear = this.rear.prev;
    }
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    return this.isEmpty() ? -1 : this.head.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    return this.isEmpty() ? -1 : this.rear.val;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.maxSize;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */