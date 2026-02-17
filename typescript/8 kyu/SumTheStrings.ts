export function sumStr(a: string, b: string): string {
  return String(Number(Number(a)+Number(b)))
}
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
console.log(sumStr("4","5"))