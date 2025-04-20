function digitCount(num) {
    let count = new Array(10).fill(0); // to count occurrences of digits 0-9
    for (let digit of num) {
        count[parseInt(digit)]++; // count how many times each digit appears
    }
    console.log(count)
    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) !== count[i]) {
            return false;
        }
    }

    return true;
}
console.log(digitCount('1210'))