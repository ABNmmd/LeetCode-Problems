/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let deq1 = sentence1.split(' ');
    let deq2 = sentence2.split(' ');
    while(deq1.length > 0 && deq2.length > 0 && deq1[0] === deq2[0]){
        deq1.shift();
        deq2.shift();
    }
    while(deq1.length > 0 && deq2.length > 0 && deq1[deq1.length - 1] === deq2[deq2.length - 1]){
        deq1.pop();
        deq2.pop();
    }
    return deq1.length === 0 || deq2.length === 0;
};