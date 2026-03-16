export function toBase64(data: Uint8Array) {
  let obj: { [key: number]: string }[] = [];
  let obj = [];
  let counter = 0;

  // Uppercase A-Z (26 chars)
  for (let i = 65; i <= 90; i++) {
    obj.push({ [counter++]: String.fromCharCode(i) });
  }

  // Lowercase a-z (26 chars)
  for (let i = 97; i <= 122; i++) {
    obj.push({ [counter++]: String.fromCharCode(i) });
  }

  // Digits 0-9 (10 chars)
  for (let i = 48; i <= 57; i++) {
    obj.push({ [counter++]: String.fromCharCode(i) });
  }

  console.log(obj);
}

toBase64("this is a bytestring!this is a bytestring!");
// export function fromBase64(encoded: string): Uint8Array {
//   // Decode to an array from Base64
// }
