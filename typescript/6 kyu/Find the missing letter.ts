// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!
export function findMissingLetter(array: [string, string, ...string[]]) {
  const lower = [..."abcdefghijklmnopqrstuvwxyz"];
  const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const isLower = array.every((a) => a === a.toLowerCase());
  const alphabet = isLower ? lower : upper;

console.log(alphabet)
  const startIndex = alphabet.indexOf(array[0]);

  for(let i =startIndex ;i<=array.length;i++){
    if(array[i] !== alphabet[startIndex+i]){
    
      return alphabet[startIndex+i]
    }
  }
  // return alphabet[startIndex + array.length];

}

// console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetter(["e", "f", "g", "h", "j", "k"]));
console.log(findMissingLetter(['O','Q','R','S']))
