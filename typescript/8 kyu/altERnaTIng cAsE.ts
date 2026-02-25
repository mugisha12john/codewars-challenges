export function toAlternatingCase(s: string) {
//   return s.split('').map(a=> a === a.toLocaleLowerCase()? a: a.toLocaleUpperCase()).join('')
let arr = s.split('')
for(let i=0;i<arr.length;i++){
    
}
}
// toAlternatingCase("hello world") === "HELLO WORLD"
// toAlternatingCase("HELLO WORLD") === "hello world"
// toAlternatingCase("hello WORLD") === "HELLO world"
// toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
// toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
// toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
console.log(toAlternatingCase("hello WORLD"))
// console.log(toAlternatingCase("12345"))
console.log(toAlternatingCase("1a2b3c4d5e"))