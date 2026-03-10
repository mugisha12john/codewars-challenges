// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
export function rgb(r: number, g: number, b: number): string {
  let hex = (value: number):string => {
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    return value.toString(16).padStart(2,"0").toUpperCase()
  }
  return `${hex(r)}${hex(g)}${hex(b)}`
}
console.log(rgb(30, 12, -5));
// console.log(rgb(15, 129, 285))
// console.log(rgb(90, 339, 98))
