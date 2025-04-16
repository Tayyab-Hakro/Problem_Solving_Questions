var totalMoney = function(n) {
    let weeks = Math.floor(n / 7);
    console.log("weeks" , weeks)
    let daysLeft = n % 7;
    let total = 0;

    // Total from full weeks
    for (let i = 0; i < weeks; i++) {
        total += 7 * (2 * (i + 1) + 6) / 2; // sum of 7-day week starting with i+1
    }

    // Total from remaining days
    for (let j = 0; j < daysLeft; j++) {
        total += (weeks + 1) + j;
    }

    return total;
};


console.log(totalMoney(10))