var removeTrailingZeros = function(num) {
    let x='0', str='';
    for(let i=num.length-1; i>=0; i--){ // loop from end to start
        if(num[i] !== x){              // check if current digit is not '0'
            x = '*';                   // mark that we've hit a non-zero digit
            str = num[i] + str;        // add current digit to the result
        }
    }
    return str;
};
console.log(removeTrailingZeros("51230100"))
