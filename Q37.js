var areNumbersAscending = function(s) {
    let tokens = s.split(' ');
    let prev = -1;

    for (let token of tokens) {
        if (!isNaN(token)) {
            let num = parseInt(token);
            if (num <= prev) return false;
            prev = num;
        }
    }

    return true;
};
