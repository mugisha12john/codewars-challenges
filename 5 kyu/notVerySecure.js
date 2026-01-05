// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
function alphanumeric(string){
    let pattern = /^[A-Za-z0-9]+$/gi
 return  pattern.test(string)
}
console.log(alphanumeric('adsf1AZ 23 12'))
console.log(alphanumeric('PassW0rd'))
console.log(alphanumeric("     "))
console.log(alphanumeric('Mazinkaiser'))
console.log(alphanumeric('Buban'))