function rot13(message){
    let upper_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    let lower_text = "abcdefghijklmnopqrstuvwxyz".split('')
    let cipher_upper = "NOPQRSTUVWXYZABCDEFGHIJKLM".split('')
    let cipher_lower = "nopqrstuvwxyzabcdefghijklm".split('')
    let result = ''
    for(let i=0;i<message.length;i++){
        let letter = message[i]
        if(upper_text.includes(letter)){
            let index = upper_text.indexOf(letter)
            let rotated = cipher_upper[index]
            result+=rotated
         
        }else if(lower_text.includes(letter)){
            let index = lower_text.indexOf(letter)
  
            //let rotated = index < 13 ? cipher_lower[index] : cipher_lower[index-13] 
            let rotated  = cipher_lower[index]
            result+= rotated
            
        }else{
            result += letter
        }
    }
    return result
}
// kigali -> xvtnyv
// test  -> grfg
//console.log(rot13("kigali"))
console.log(rot13('test'))
console.log(rot13('Ruby is cool!'))