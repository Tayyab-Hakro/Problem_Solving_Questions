var intersection = function(nums1, nums2) {
    
let res = []
    for(let i = 0 ; i<nums1.length ;i++){
if( nums2.includes(nums1[i]) && !res.includes(nums1[i])){
res.push(nums1[i])
}
}
return res
};
console.log(intersection([1,2,2,1], [2,2]))