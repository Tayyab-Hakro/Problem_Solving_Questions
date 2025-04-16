function countBalancedPairs(paran) {
    let stack = [];
    let count = 0;

    for (let i = 0; i < paran.length; i++) {
        if (paran[i] === '(') {
            stack.push('(');
        } else if (paran[i] === ')') {
            if (stack.length === 0) {
                // More closing than opening
                return false;
            }
            stack.pop();
            count++; // One valid pair completed
        }
    }

    // If stack is empty, all openings had closings
    return stack.length === 0 ? count : false;
}
