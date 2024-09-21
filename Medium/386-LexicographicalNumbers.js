/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let lexicographicalNum = [];
    let curntNum = 1;

    for (let i = 0; i < n; i++) {
        lexicographicalNum.push(curntNum);
        if (curntNum * 10 <= n) {
            curntNum *= 10;
        } else {
            while (curntNum % 10 == 9 || curntNum >= n) {
                curntNum = Math.floor(curntNum / 10);
            }
            curntNum += 1;
        }
    }
    return lexicographicalNum;
}