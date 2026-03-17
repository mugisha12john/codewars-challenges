export function toBase64(data: Uint8Array) {
  let obj: { [key: number]: string }[] = [];
  let counter = 0;
  let binary: object[] = [];
  // Uppercase A-Z
  for (let i = 65; i <= 90; i++) {
    obj.push({ [counter++]: String.fromCharCode(i) });
  }
  // Lowercase a-z
  for (let i = 97; i <= 122; i++) {
    obj.push({ [counter++]: String.fromCharCode(i) });
  }

  // Digits 0-9
  for (let i = 48; i <= 57; i++) {
    obj.push({ [counter++]: String.fromCharCode(i) });
  }

  obj.push({ [counter++]: "+" });
  obj.push({ [counter++]: "/" });
  for (let i = 0; i < data.length; i += 3) {
    const chunk = data.slice(i, i + 3);
    binary.push(chunk);
  }
  const binaryArray = binary.map((group) =>
    group.map((num) => num.toString(2).padStart(8, "0")).join(""),
  );

  console.log(binaryArray);
}

//out put =   dGhpcyBpcyBhIHRlc3Qh
console.log(toBase64([77, 97, 110, 32, 65]));
// export function fromBase64(encoded: string): Uint8Array {
//   // Decode to an array from Base64
// }
