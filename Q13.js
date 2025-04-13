/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if (n % 2 === 1) {
        // n is odd, return n times same letter
        return 'a'.repeat(n);
    } else {
        // n is even, return n-1 times 'a' and 1 time 'b'
        return 'a'.repeat(n - 1) + 'b';
    }
};
console.log(generateTheString(4))