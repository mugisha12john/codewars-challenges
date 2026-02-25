export function position(alphabet:string):string {
    let englishLetter:string[]= []
    for(let i=97;i<123;i++){
        englishLetter.push(String.fromCharCode(i))
    }
    return `Position of alphabet: ${englishLetter.indexOf(alphabet)}`
}
console.log(position('m'))