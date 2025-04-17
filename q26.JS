var pickGifts = function(gifts, k) {
let sum = 0
    for(let i = 0 ;i<k ;i++){
        let sqr = Math.sqrt(gifts[i])
        sum +=sqr
    }
    return sum
};
console.log(pickGifts([25,64,9,4,100] , 4))