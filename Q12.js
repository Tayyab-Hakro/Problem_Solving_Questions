/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    wordDict = wordDict.flat()
    for(let i = 0 ; i<s.length ; i++){
        if(wordDict.includes(s[i])){
            return true
        }
    }
    return false
};
console.log(wordBreak("applepenapple", ["apple","pen"]))