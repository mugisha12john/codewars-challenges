// Complete the solution so that it splits the string into strings of two characters in a list/array 
// (depending on the language you use). If the string contains an odd number of characters then it should replace
//  the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let result = [];
  if (str.length % 2 !== 0) {
    for (let i = 0; i <= str.length; i += 2) {
      let next = str[i + 1] || "_";

      result.push(`${str[i]}${next}`);
    }
  } else {
    for (let i = 0; i <= str.length; i += 2) {
      let next = str[i + 1];
      if (next !== undefined) {
        result.push(`${str[i]}${next}`);
      }
    }
  }
  return result;
}
console.log(solution("abcdef"));
console.log(solution("abc"));
