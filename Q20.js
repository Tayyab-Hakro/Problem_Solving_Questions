/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
let freq  = {}
let res = []
for(let char of arr){
    freq[char] =  (freq[char] || 0) +1
}
for(let char in freq){
if(freq[char] === 1){
    res.push(char)
}
}
return res[k-1] || ""
};
    console.log(kthDistinct( ["d","b","c","b","c","a"],  2 ))