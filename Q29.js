// Write a function that takes a string as input and
//  returns the reversed string using a stack.

function reversedSTR(str) {
    let stack = [];
for(let i = 0 ; i<str.length ;i++){
    stack.push(str[i])
}
let reversed = ""
while(stack.length > 0){
    reversed += stack.pop()
}
return reversed
}

console.log(reversedSTR("hello")); // Output: "olleh"
