/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0
    let redFag = false
    for(let i = 0 ;i<s.length ;i++){
        if(s[i] === "|"){
redFag = !redFag
            } else if(s[i] === "*" && !redFag ){
            count++
        }
    }

return count

};
console.log(countAsterisks("l|*e*et|c**o|*de|"))