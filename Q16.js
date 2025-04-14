var findGCD = function(nums) {
let min = Math.min(...nums)
let max = Math.max(...nums)
for(let i  =2 ; i<=max ;i++ ){
if(min % i === 0 && max % i === 0){
    return i
}
}
return 1
};

console.log(findGCD([2,5,6,9,10]))

console.log(findGCD([7,5,6,8,3]))
