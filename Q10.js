/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let n = nums.length
let val = n*(n +1) /2
let sum = nums.reduce((item , val) => item +=val)
return val -sum
};

console.log(missingNumber( [3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([1]))
