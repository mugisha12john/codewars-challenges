export function validBraces(braces: string) {
  if (!/[(){}\[\]]/gim.test(braces)) return false;
  let match = [];
  const pair:Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let str of braces) {
    if ("({[".includes(str)) {
      match.push(str);
    } else {
      if (!match.length || match[match.length -1] !== pair[str]) {
        return false;
      }
      match.pop();
    }
  }
  return match.length === 0;
}
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
console.log(validBraces("adf"));
console.log(validBraces("(){}[]"));
