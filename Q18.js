/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = []
    let left= 0;
    while(nums.length === 0){
     let str =    nums[left] * nums[left]
        res.push(str)
        left++
    }
    return res
}
console.log(sortedSquares([-4,-1,0,3,10]))
