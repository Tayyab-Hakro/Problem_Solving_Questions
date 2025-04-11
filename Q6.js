var frequencySort = function(nums) {
    // Step 1: Create a frequency map
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Step 2: Sort based on the conditions
    nums.sort((a, b) => {
        const freqA = freqMap[a];
        const freqB = freqMap[b];

        if (freqA === freqB) {
            return b - a; // descending order if frequency is same
        } else {
            return freqA - freqB; // ascending order of frequency
        }
    });

    return nums;
};

console.log(frequencySort([1,1,2,2,2,3]));  // Output: [3,1,1,2,2,2]
console.log(frequencySort([2,3,1,3,2]));    // Output: [1,3,3,2,2]
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])); // Output: [5,-1,4,4,-6,-6,1,1,1]
