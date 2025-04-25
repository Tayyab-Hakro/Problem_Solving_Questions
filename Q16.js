/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let stack = []
for(let i = 0  ; i<arr1.length ;i++){
    if(arr1[i] === arr2[i]){
stack.push(arr1[i])
    }
}
return stack
};
console.log(relativeSortArray( [2,3,1,3,2,4,6,7,9,2,19],  [2,1,4,3,9,6]))