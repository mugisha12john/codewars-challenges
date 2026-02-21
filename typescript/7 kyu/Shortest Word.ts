// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
export function findShort(s: string):number {
    let arr:number[] = s.split(' ').map(word=> word.length).sort((a,b)=>a-b)
  return +arr[0];
}
console.log(findShort("Let's travel abroad shall we"))
console.log(findShort("lets talk about javascript the best language"))