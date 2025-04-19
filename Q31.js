const arr = [[1,4], [3,9]]
let unique = new Set()
for(let [start ,emd] of arr){
for(let i = start ; i<emd ;i++){
 unique.add(i)
}
console.log(unique.size) 
}