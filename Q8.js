/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
 s1 = s1.split("").sort()
 s2 = s2.split("").sort()
 let case1  = true;
 let case2  = true;

for(let i = 0 ; i<s1.length ;i++){
    if( s1[i] > s2[i]   ){
        case1 = false
    }
    if(  s2[i] >= s1[i]  ){
        case2 = false
    }
} 
return case1 || case2
};
console.log(checkIfCanBreak("abc",  "xya"))
console.log(checkIfCanBreak("abe", "acd"))