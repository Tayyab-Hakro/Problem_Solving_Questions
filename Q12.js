/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    let res = [];

    // Find minimum difference between adjacent elements
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        minDiff = Math.min(minDiff, diff);
    }

    // Collect pairs with the minimum difference
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff === minDiff) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};

console.log(minimumAbsDifference([4, 2, 1, 3])); 
// Output: [[1,2],[2,3],[3,4]]
