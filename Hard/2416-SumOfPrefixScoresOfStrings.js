/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    let trie = new Trie();
    let scores = new Array(words.length).fill(0);

    for (const word of words){
        trie.insert(word);
    }

    for (let i=0; i<words.length; i++){
        scores[i] = trie.countPrefixes(words[i]);
    }

    return scores;
};

class TrieNode {
    constructor() {
        this.next = {};
        this.cnt = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.next[char]){
                node.next[char] = new TrieNode();
            }
            node.next[char].cnt++;
            node = node.next[char];
        }
    }

    countPrefixes(word){
        let node = this.root;
        let score = 0;
        for (const char of word) {
            if (!node.next[char]) break;
            score += node.next[char].cnt;
            node = node.next[char];
        }
        return score;
    }
}