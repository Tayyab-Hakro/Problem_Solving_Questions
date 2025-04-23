/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let total = 0;
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        if (left === right) {
            // total += nums[left]; // only one element left
            console.log(nums[left])
        } else {
            const concat = parseInt(String(nums[left]) + String(nums[right]));
            total += concat;
        }
        left++;
        right--;
    }

    return total;
};

console.log(findTheArrayConcVal([7,52,2,4]))