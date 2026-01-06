function toUnderscore(string) {
  // const upperLetter = string.match(/[A-Z]/g)
  // const searchposition = [string.indexOf(upperLetter[0]),string.indexOf(upperLetter[1])]
 
//   for(let i=0;i<=string.length;i++){
//     let a = string[i].toString().toUpperCase()
//     if(string[i] === a){
//         console.log("Underscore at index" + i)
//     }
//   }
 let arr = string.split('')
 let result =''
 for(letter of arr){
     
    if(letter === letter.toUpperCase()){
        result+=`_${letter.toLowerCase()}`
    }else{
        result+=letter
    }
 
 }
 return result
}
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"
console.log(toUnderscore("TestController"))