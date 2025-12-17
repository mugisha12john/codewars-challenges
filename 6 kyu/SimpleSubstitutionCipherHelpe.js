/* 
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be.
*/
function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    let result = '';

    for (let letter of str) {
      let index = abc1.indexOf(letter);
      result += index === -1 ? letter : abc2[index];
    }

    return result;
  };

  this.decode = function (str) {
    let result = '';

    for (let letter of str) {
      let index = abc2.indexOf(letter);
      result += index === -1 ? letter : abc1[index];
    }

    return result;
  };
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
let sub = new SubstitutionCipher(abc1, abc2);
// console.log(sub.encode('aeiou'))
console.log(sub.decode('eirfg'))