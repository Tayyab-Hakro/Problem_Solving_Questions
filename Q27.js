/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    // Use a Set to store unique non-zero values
let unique = new Set()
for(let num of nums){
    if(num !== 0)   unique.add(num)

};
return unique.size

}