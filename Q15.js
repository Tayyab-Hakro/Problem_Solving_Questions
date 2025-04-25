/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let odd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            [nums[odd], nums[i]] = [nums[i], nums[odd]]
            odd++
        }
    }
    return nums;
};
console.log(sortArrayByParity([1,2,3,4]))