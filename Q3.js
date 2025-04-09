var sumOfSquares = function(nums) {
    let s = nums.length
let sum  =0 ;
    for(let i = 0;   i<s ;i++){
        if(s % (i+1) === 0){
           let square = nums[i]*nums[i]
sum +=square
    }
    }
return sum    
};

console.log(sumOfSquares([1,2,3,4]))

console.log(sumOfSquares( [2,7,1,19,18,3]))
