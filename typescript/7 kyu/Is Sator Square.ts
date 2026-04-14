export function isSatorSquare(tablet: string[][]) {
  const totalSize = tablet.length;
  for (let i = 0; i < totalSize; i++) {
    for (let j = 0; j < totalSize; j++) {
        if(tablet[i][j] !== tablet[j][i] || tablet[i][j] !== tablet[totalSize-i-1][totalSize-j-1]){
            return false
        }
    }
  }
  return true
}
console.log(
  isSatorSquare([
    ["B", "A", "T", "S"],
    ["A", "B", "U", "T"],
    ["T", "U", "B", "A"],
    ["S", "T", "A", "B"],
  ]),
);
