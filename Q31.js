function encryptSum(nums) {
    let totalSum = 0;

    for (let num of nums) {
        // Convert number to string to access individual digits
        let strNum = num.toString();
        console.log(strNum)
        // Find the largest digit in the number
        let maxDigit = Math.max(...strNum.split(''));

        // Create the encrypted number by repeating the max digit for the length of the original number
        let encryptedNum = parseInt(maxDigit.repeat(strNum.length));

        // Add the encrypted number to the total sum
        totalSum += encryptedNum;
    }

    return totalSum;
}

// Example usage:
console.log(encryptSum([10, 21, 31]));  // Output: 66
