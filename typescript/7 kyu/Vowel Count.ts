// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
export class Kata {
   static getCount(str: string):number {
    let vowel = ['a','i','o','u','e']
    let count =0
    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
            count+=1
        }
    }
    return count
}
}
// Kata.getCount("abracadabra"), 5)
const k = new Kata()
// console.log(k.getCount('abracadabra'))