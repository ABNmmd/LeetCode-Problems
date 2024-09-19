/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    let memo = {};
    return computeResults(expression, memo, 0, expression.length - 1);
};

var computeResults = function (exp, memo, s, e) {
    if (memo[`${s}-${e}`]) {
        return memo[`${s}-${e}`];
    }

    let res = [];
    if (s === e) {
        res.push(parseInt(exp[s], 10));
        return res;
    }

    if (e - s === 1 && !isNaN(exp[s])) {
        res.push(parseInt(exp.slice(s, e + 1), 10));
        return res;
    }

    for (let i = s; i <= e; i++) {
        if (!isNaN(exp[i])) continue;

        const leftResults = computeResults(exp, memo, s, i - 1);
        const rightResults = computeResults(exp, memo, i + 1, e);

        for (let leftValue of leftResults) {
            for (let rightValue of rightResults) {
                if (exp[i] === "+") {
                    res.push(leftValue + rightValue);
                } else if (exp[i] === "-") {
                    res.push(leftValue - rightValue);
                } else if (exp[i] === "*") {
                    res.push(leftValue * rightValue);
                }
            }
        }
    }

    memo[`${s}-${e}`] = res;

    return res;
}