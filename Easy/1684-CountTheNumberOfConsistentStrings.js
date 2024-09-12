/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    // Create a set to store the allowed characters
    let allowed_chrs = new Set(allowed);
    let cnt = 0;

    // Iterate through each word in the 'words' list
    for (let word of words){
        cnt++;
        for (let c of word){
            if (!allowed_chrs.has(c)){
                cnt--;
                break;
            }
        }
    }
    return cnt;
};