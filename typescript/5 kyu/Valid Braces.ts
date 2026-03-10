export function validBraces(braces: string) {
  if (!/[(){}\[\]]/gim.test(braces)) return false;
  
}
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
console.log(validBraces("adf"));
