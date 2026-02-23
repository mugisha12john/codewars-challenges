export function factorial(n: number) {
  let sum:number =1
  for(let i=1;i<=n;i++){
    sum*=i
  }
  return sum
}