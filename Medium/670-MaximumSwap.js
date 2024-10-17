/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    let numStr = num.toString().split('');
    let maxDigitIndx = -1;
    let si1 = -1;
    let si2 = -1;

    for (let i = numStr.length - 1; i >= 0; i--) {
        if (maxDigitIndx == -1 || numStr[i] > numStr[maxDigitIndx]) maxDigitIndx = i;
        if (numStr[i] < numStr[maxDigitIndx]) {
            si1 = i;
            si2 = maxDigitIndx;
        }
    }

    if (si1 != -1 && si2 != -1) {
        [numStr[si1], numStr[si2]] = [numStr[si2], numStr[si1]];
    }

    return Number(numStr.join(''));
};