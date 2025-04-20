/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
num = num.toString().split('').sort((a , b)=> a-b)
let sum = 0
for(let i = 0 ; i<num.length ;i++){
  sum +=parseInt( [num[i] , num[i+1]] = [num[i+1] , num[i] ])
  console.log(sum)
}
return sum
};

console.log(splitNum(4325))