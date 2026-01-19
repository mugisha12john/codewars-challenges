var encryptThis = function (text) {
  let arr = text.split(" ");
  let answer = [];
  for (let element of arr) {
    let result = "";
    let first = 0;
    if (Number(element[0])) {
      first = element[0];
    } else {
      first = element.charCodeAt(0);
    }

    result += first;
    for (let i = 1; i < element.length; i++) {
      let a = element[element.length - i];
      result += a;
    }
    answer.push(result);
  }
  return answer.join(" ");
};

console.log(encryptThis("Hello"))
console.log(encryptThis("hello world"));
console.log(encryptThis("122cedo"))
console.log(encryptThis("65"));
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
// console.log(encryptThis("Why can we not all be like that wise old bird"))

// "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
