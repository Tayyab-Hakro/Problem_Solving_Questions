var isEmpty = function(obj) {
obj = Object.values(obj)
if(obj.length === 0){
    return false
}
return true
};

console.log(isEmpty({"x": 5, "y": 42}))

console.log(isEmpty({}))
