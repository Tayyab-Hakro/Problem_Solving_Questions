/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
let freq = {}
for(let char of nums){
    freq[char] = (freq[char] || 0)+1
}
let val = Object.entries(freq).filter(([key , value])=> value >1).map(([key, value])=> parseInt(key))
console.log(val)
};

 console.log(findDuplicates([4,3,2,7,8,2,3,1]))