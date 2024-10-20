/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
    let st = [];

    for (let currChar of expression) {
        if (currChar == ')') {
            let val = [];

            while (st[st.length - 1] != '(') {
                val.push(st.pop());
            }
            st.pop();
            let op = st.pop();
            let res = evaluateSubExp(op, val);
            st.push(res);
        } else if (currChar != ',') {
            st.push(currChar);
        }
    }

    return st[st.length - 1] == 't';
};

var evaluateSubExp = function (op, vals) {
    if (op == '!') return vals[0] == 't' ? 'f' : 't';

    if (op == '&') {
        for (let val of vals) {
            if (val == 'f') return 'f';
        }
        return 't';
    }

    if (op == '|') {
        for (let val of vals) {
            if (val == 't') return 't';
        }
        return 'f';
    }

    return 'f';
}