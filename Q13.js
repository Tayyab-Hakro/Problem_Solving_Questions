/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let freq = {}; // Object to keep track of how many subarrays contain each number
    let num = nums.length; // Total number of subarrays

    // Iterate over each subarray in the input
    for (let char of nums) {
        // Use a Set to ensure we only count each number once per subarray
        let uniqueSet = new Set(char);
        
        // For each unique number in the current subarray
        for (let check of uniqueSet) {
            // Increment the frequency count for that number
            freq[check] = (freq[check] || 0) + 1;
        }
    }

    let res = []; // Result array to store numbers present in all subarrays

    // Check frequency map to find numbers appearing in all subarrays
    for (let [key, val] of Object.entries(freq)) {
        if (val === num) { // If the number appeared in all subarrays
            res.push(Number(key)); // Convert key back to number and add to result
        }
    }

    return res; // Return the array of common numbers
};