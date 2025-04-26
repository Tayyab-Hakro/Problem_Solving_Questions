var sortedSquares = function(nums) {
    let n = nums.length;
    let res = new Array(n);
    let left = 0;
    let right = n - 1;
    let pos = n - 1;
    console.log(pos)
    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            res[pos] = leftSq;
            left++;
        } else {
            res[pos] = rightSq;
            right--;
        }
        pos--;
    }

    return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
