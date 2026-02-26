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