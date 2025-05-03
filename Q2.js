/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
 let stack = []
 for(let char of s){
    if(isNaN(char)){
        stack.push(char)
    }else{
        if(stack.length >0 ){
            stack.pop()

        }
    }
 }
        return stack.join("")
    
};
console.log(clearDigits("cb34"))
console.log(clearDigits("abc"))