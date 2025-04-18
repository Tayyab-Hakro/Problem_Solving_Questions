/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    // Use a Set to store unique non-zero values
    let unique = new Set();
    
    for (let num of nums) {
        if (num !== 0) {
            unique.add(num);
        }
    }
    
    // The number of unique non-zero values is the answer
    return unique.size;
};
