/*Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string*/
function lettersToNumbers(s) {
let lower = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
  'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
  'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
  'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
  'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,
  'z': 26
};

let upper = {
  'A': 2, 'B': 4, 'C': 6, 'D': 8, 'E': 10,
  'F': 12, 'G': 14, 'H': 16, 'I': 18, 'J': 20,
  'K': 22, 'L': 24, 'M': 26, 'N': 28, 'O': 30,
  'P': 32, 'Q': 34, 'R': 36, 'S': 38, 'T': 40,
  'U': 42, 'V': 44, 'W': 46, 'X': 48, 'Y': 50,
  'Z': 52
};

let digit = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
};
const arr =  s.split('')
let hold = []
for(a of arr){
  if(lower[a]){
    hold.push(lower[a])
  }
  if(upper[a]){
    hold.push(upper[a])
  }
  if(digit[a]){
    hold.push(digit[a])
  }
}
return hold.reduce((a,b)=>a+b)
}


let test1 ="Give me 5!";
console.log(lettersToNumbers(test1))

// refactor usin charCodeAt
function lettersToNumbers(s) {
  let sum = 0;

  for (let char of s) {
    let code = char.charCodeAt(0);


    if (code >= 97 && code <= 122) {
      sum += code - 96;
    }


    else if (code >= 65 && code <= 90) {
      sum += (code - 64) * 2;
    }


    else if (code >= 48 && code <= 57) {
      sum += code - 48;
    }
  }

  return sum;
}

let test2 ="Hello World! 123";
console.log(lettersToNumbers(test2))