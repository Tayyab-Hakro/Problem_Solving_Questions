/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date){
    const [year , month, day] = date.split("-")

    let Year = parseInt(year).toString(2)
    let months = parseInt(month).toString(2)
    let d =  parseInt(day).toString(2)
return  `${Year}-${months}-${d}`

};
console.log(convertDateToBinary("2080-02-29"))