function duplicateEncode(word){
    let ignoreCase = word.toLowerCase()
    let occurance = ignoreCase.split('').reduce((a,b)=>{
        a[b] = (a[b] || 0) + 1
        return a
    },{})
    let result = ''
    for(let i=0;i<word.length;i++){
        let letter = ignoreCase[i]
        occurance[letter] > 1 ? result+=')' : result+='('
    }
    return  result
}
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
console.log(duplicateEncode("Success"))
console.log(duplicateEncode('din'))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("(( @"))