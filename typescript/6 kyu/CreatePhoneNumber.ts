// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!
export function createPhoneNumber(numbers: number[]) {

  return numbers.join('').replace(/([0-9]{3})([0-9]{3})([0-9]{4})/,(_,f1,f2,f3) => `(${f1}) ${f2}-${f3}`)

  // const num = numbers.join('')
  // return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6,10)}`

}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))