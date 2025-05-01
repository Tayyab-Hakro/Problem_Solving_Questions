/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let reverseAlphabetIndex = 26 - (s.charCodeAt(i) - 'a'.charCodeAt(0));
        total += reverseAlphabetIndex * (i + 1); // i+1 for 1-based index
    }
    return total;
};
