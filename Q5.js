/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
let res  = ''
    for(let i = 0 ; i<s.length ;i++){
s[i] = parseInt(s[i])
if(s[i] === parseInt(s[i+1])){
res = s[i-1 ]
}
}
return res
};

console.log(clearDigits("cb34"))