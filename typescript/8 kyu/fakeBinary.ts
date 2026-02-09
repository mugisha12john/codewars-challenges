// Given a string of digits, you should replace any digit below 5 with '0' and any digit
//  5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


export const fakeBin = (x:string):string => {
  return x.split('').map(Number).map(a => a >= 5 ? '1': '0').join('')
};
console.log(fakeBin('39325609419252637987845'))

// Testing for x = "39325609419252637987845": expected '01000101001000101111100' to equal '01001101001010101111101'