/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const freq = {}
    for(let char of s){
        freq[char] = (freq[char] || 0) +1
    }
    const obj = Object.values(freq)
    return obj.every(val => val ===obj[0])
};


console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb"));  // false