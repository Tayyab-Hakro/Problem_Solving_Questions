let arr = [90,42,40,30.88]
let stack = []
for(let op of arr){
if(op > 40 ){
    stack.push(op)
}
}

console.log(stack)