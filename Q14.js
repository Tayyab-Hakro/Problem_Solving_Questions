/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
nums = nums.sort((a,b) => a -b )
 let arr = nums.filter((item) => item %2 === 0)
 let arr2 = nums.filter((item) => item %2 !== 0)
console.log(arr)
console.log(arr2)
return arr.concat(arr2)
};

console.log(sortArrayByParity([3,1,2,4]))