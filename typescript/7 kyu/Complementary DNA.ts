// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

export class Kata {
   dnaStrand(dna: string) {
    let arr: string[] = dna.split('')
    let result =''
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 'G'){
            result+='C'
        }
        else if(arr[i]=== 'T'){
            result+='A'
        }
        else if(arr[i] ==='A'){
            result+='T'
        }
        else if(arr[i] ==='C'){
            result+='G'
        }
        else{
            result+=''
        }
    }
    return result
  }
  
}
let obj = new Kata()
console.log(obj.dnaStrand("GTAT"))
console.log(obj.dnaStrand('ATTGC'))