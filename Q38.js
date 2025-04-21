let arr = ["a" ,3,"b" ,52,3]
let res = []

for(let token of arr){
    if(!isNaN(token)){
        res.push(token)
    }
}
console.log(res)