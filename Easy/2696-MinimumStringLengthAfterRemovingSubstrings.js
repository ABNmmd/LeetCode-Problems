/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = [];
    for (let c of s) {
        if (!stack.length) {
            stack.push(c);
            continue;
        }
        if (c == 'B' && stack[stack.length - 1] == 'A') {
            stack.pop();
        } else if (c == 'D' && stack[stack.length - 1] == 'C') {
            stack.pop();
        } else {
            stack.push(c);
        }

    }
    return stack.length;
}