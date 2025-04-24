
var splitWordsBySeparator = function(words, separator) {
    let result = [];

    for (let word of words) {
        let parts = word.split(separator);
        console.log(parts)
        for (let part of parts) {
            if (part) { // Exclude empty strings
                result.push(part);
            }
        }
    }

    return result;
};
console.log(splitWordsBySeparator( ["one.two.three","four.five","six"] ,'.'))