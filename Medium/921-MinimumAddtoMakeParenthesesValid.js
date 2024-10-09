/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let openBrackets = 0;
    let minAddsReq = 0;

    for (c of s) {
        if (c == '(') {
            openBrackets++;
        } else {
            if (openBrackets > 0) {
                openBrackets--;
            } else {
                minAddsReq++;
            }
        }
    }

    return openBrackets + minAddsReq;
};