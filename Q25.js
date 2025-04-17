var findNonMinOrMax = function(nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
  let res =  nums.filter(item => item !== max && item !==min )
    return res.length === 0  ? -1 : res[0]
};
console.log(findNonMinOrMax([3,2,1,4]))
console.log(findNonMinOrMax( [2,1,3]))
console.log(findNonMinOrMax( [1,2]))