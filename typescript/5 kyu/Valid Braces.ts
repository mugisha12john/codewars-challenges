export function validBraces(braces: string) {
  if (!/[(){}\[\]]/gim.test(braces)) return false;
  let match = []
  let pair = {
    '[': ']',
    '(':')',
    '{':'}'
  }

  // for(let str in braces){
  //   if('({['.includes(str)){
  //       match.push(str)
  //   }
  //   else{
  //       if(!match || match[-1] !== pair[str])
  //   }
  // }
//   return braces.split('').reduce<Record<string,number>>((a,b)=> {
//     a[b] = (a[b] || 0) +1
//     return a
//   },{})
}
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
console.log(validBraces("adf"));
console.log(validBraces("(){}[]"))
