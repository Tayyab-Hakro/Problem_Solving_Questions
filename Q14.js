/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
nums = nums.sort((a,b) => a -b )
let stack = []
for(let i =0 ; i<nums.length ;i++){
    if(nums[i] % 2 === 0 ){
        stack.push(nums[i])
    }
}    
return stack
};

console.log(sortArrayByParity([3,1,2,4]))