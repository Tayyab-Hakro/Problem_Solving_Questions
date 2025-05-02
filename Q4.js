/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDepth = 0;
    let currentDepth = 0;

    for (let char of s) {
        if (char === '(') {
            currentDepth++;
            console.log(currentDepth)
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        } else if (char === ')') {
            currentDepth--;
        }
    }

    return maxDepth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))