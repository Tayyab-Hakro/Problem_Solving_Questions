/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let freq = {}; // Step 1: frequency map

    // Step 2: count occurrences
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 3: extract the values and compare
    const values = Object.values(freq);
    return values.every(val => val === values[0]);
};

console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb"));  // false
