// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
function incrementString(strng) {
  if (strng === null) return;

  let num = strng.match(/\d+$/);
  
  
  let stringOnly = num ? strng.slice(0, -num[0].length) : strng;

  if (num === null) {
    return `${stringOnly}1`;
  } else {
    let iteration = Number(num[0]) + 1;
    let currentLen = String(iteration).length;

    if (num[0].length === 1) {
      return `${stringOnly}${iteration}`;
    } 
    else if (currentLen !== num[0].length) {
      let missing = num[0].length - currentLen;
      missing = Math.max(0, missing);
      let zeros = "0".repeat(missing);
      return `${stringOnly}${zeros}${iteration}`;
    } 
    else {
      return `${stringOnly}${iteration}`;
    }
  }
}

console.log(incrementString('foo'))
console.log(incrementString('foobar23'))
console.log(incrementString('foo0043'))
console.log(incrementString('foo099'))
console.log(incrementString("foo9"));
console.log(incrementString('foobar000'))
