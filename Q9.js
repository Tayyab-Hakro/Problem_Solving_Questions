function init (n){


    if(n === 1) return n
    return n +init(--n)
     
}

console.log(init(5))