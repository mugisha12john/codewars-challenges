// Create a function that accepts a string and a single character,
//  and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
interface Obj{
    [key:string]:number
}
export function strCount(str: string, letter: string):number {
  let occ= str.split('').reduce<Obj>((a,b)=>{
    a[b] =(a[b]||0)+1
    return a
  },{})
   return letter in occ ? occ[letter] : 0
}
console.log(strCount('mugishaa','a'))