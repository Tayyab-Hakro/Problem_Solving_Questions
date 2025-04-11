/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (isDigit(char)) {
            // Remove the last non-digit from the stack (if any)
            while (stack.length && isDigit(stack[stack.length - 1])) {
                stack.pop();
            }
            if (stack.length) stack.pop(); // remove the closest non-digit
        } else {
            stack.push(char); // store letters
        }
    }
    
    return stack.join('');
};

function isDigit(ch) {
    return ch >= '0' && ch <= '9';
}

clearDigits("cb34") 
// First: '3' deletes 'b' => "c4"
// Then: '4' deletes 'c' => ""
// Output: ""
