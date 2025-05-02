function outer(){
    let count = 1
    return function inner(){
      return  count++
      
    }
}
const counter =  outer()
console.log(counter())
console.log(counter())
console.log(counter())
