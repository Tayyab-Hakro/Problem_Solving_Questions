var checkArithmeticSubarrays = function(nums, l, r) {
    const result = [];

    for (let i = 0; i < l.length; i++) {
        // Extract the subarray from nums[l[i]] to nums[r[i]]
        let subarray = nums.slice(l[i], r[i] + 1);

        // Sort the subarray
        subarray.sort((a, b) => a - b);

        // Get the common difference
        let diff = subarray[1] - subarray[0];
        let isArithmetic = true;

        // Check if all consecutive differences are equal
        for (let j = 1; j < subarray.length - 1; j++) {
            if (subarray[j + 1] - subarray[j] !== diff) {
                isArithmetic = false;
                break;
            }
        }

        result.push(isArithmetic);
    }

    return result;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
