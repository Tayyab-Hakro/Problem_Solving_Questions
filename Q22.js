var numOfPairs = function(nums, target) {
    let count = 0;
    for(let i  = 0 ; i<nums.length ; i++){
        for(let j = 0 ; j<nums.length ; j++){
            if( i != j && nums[i] + nums[j] ===  target){
                count++
            }
        }
    }
    return count
};

console.log(numOfPairs(["777","7","77","77"], "7777"))