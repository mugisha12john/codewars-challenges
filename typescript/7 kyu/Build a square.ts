// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++
export function generateShape(int: number): string {
  let result: string = '';
  for (let i = 1; i <= int; i++) {
    let row: string = '';
    for (let j = 1; j <= int; j++) { 
      row += '+';
    }
    if (i < int) row += '\n';
    result += row;
  }
  return result;
}

console.log(generateShape(2))