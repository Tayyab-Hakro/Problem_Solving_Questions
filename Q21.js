/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0;
    while (n > 0) {
        sum += n % k;  // Add the remainder to the sum
        n = Math.floor(n / k);  // Update n to the quotient
    }
    return sum;
};

console.log(sumBase(34, 6))