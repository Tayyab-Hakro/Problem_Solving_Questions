var calPoints = function(operations) {
    let record = [];

    for (let op of operations) {
        if (!isNaN(op)) {
            record.push(parseInt(op)); // Pattern 1
        } else if (op === "C") {
            record.pop(); // Pattern 2
        } else if (op === "D") {
            record.push(2 * record[record.length - 1]); // Pattern 3
            console.log(record)
        } else if (op === "+") {
            record.push(record[record.length - 1] + record[record.length - 2]); // Pattern 4
        }
    }

    return record.reduce((sum, score) => sum + score, 0);
};


console.log(calPoints(["5","2","C","D","+"]))