export const encryptThis = (text: string): string => {
  return text
    .split(" ")
    .map(word => {
      if (!word) return "";
      if (/^\d/.test(word)) return word;

      const ASCIICosde = word.charCodeAt(0);

      if (word.length === 1) return `${ASCIICosde}`;
      if (word.length === 2) return `${ASCIICosde}${word[1]}`;

      return (
        ASCIICosde +
        word[word.length - 1] +
        word.slice(2, -1) +
        word[1]
      );
    })
    .join(" ");
};
//console.log(encryptThis("hello world"))
// console.log(encryptThis('84ryRpa 89xx 97TY 85ax 78TotKY'))
console.log(encryptThis('A'))
// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo"