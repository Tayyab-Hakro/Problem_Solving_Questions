var frequencySort = function(nums) {
let freq  = {};
for(let char of nums){
    freq[char] = (freq[char] || 0)+1
}
nums.sort((a ,b )=>{
    console.log(freq[a])
    // if(freq[a] === freq[b]){
    //     return b - a 
    // }
    return freq[a] - freq[b]
})
return nums
};

console.log(frequencySort([1,1,2,2,2,3]))