let arr = [1,2,3,4]
let res = []
for(let i = 0 ; i<arr.length ;i+=2){
    res.push([arr[i] , arr[i+1]] )
}
console.log(res)