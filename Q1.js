var maximumNumberOfStringPairs = function(words) {
    let count = 0;
let reversed = words.map((item) =>item.split("").reverse().join(""))
for(let i = 0 ; i < words.length ;i++){
    for(let j = i+1 ; j<reversed.length ;j++){
if(reversed[j] === words[i] ){
    count++
}
    }
}
return count
};

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))