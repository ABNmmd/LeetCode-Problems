/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let cont = n;
    return function () {
        return cont++;
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
