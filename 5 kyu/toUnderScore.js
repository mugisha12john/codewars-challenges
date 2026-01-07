// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"
function toUnderscore(string) {
    if(typeof(string) === 'number') return String(string)
 let arr = string.split('')
 let result =''
 for(letter of arr){
    if(/\d/.test(letter)){
        result+=letter
    }
    else if(letter === letter.toUpperCase()){
        result+=`_${letter.toLowerCase()}`
    }else{
        result+=letter
    }
 
 }
 return (/^_/.test(result) ? result.slice(1) : result)
}
console.log(toUnderscore("Test4C432ontroller"))
console.log(toUnderscore("MoviesAndBooks"))