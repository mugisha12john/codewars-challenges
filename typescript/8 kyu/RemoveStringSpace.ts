export function noSpace(x:string):string {
  return x.split(' ').join('')
}
console.log(noSpace('kigali is the best city'))