/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a,b)=> a-b)
   arr.sort((a,b) => a-b)
    return target.every((val , i) => val=== arr[i])
    };
console.log(canBeEqual([1,2,3,4],  [2,4,1,3]))
 console.log(canBeEqual([3,7,9],  [3,7,11]))