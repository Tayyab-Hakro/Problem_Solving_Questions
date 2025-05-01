/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    // Split the input date by '-'
    const [year, month, day] = date.split('-');
    
    // Convert each part to integer then to binary string
    const yearBin = parseInt(year).toString(2);
    const monthBin = parseInt(month).toString(2);
    const dayBin = parseInt(day).toString(2);
    
    // Return the formatted binary date
    return `${yearBin}-${monthBin}-${dayBin}`;
};

console.log(convertDateToBinary("2080-02-29"))