export function rgb(r: number, g: number, b: number): string {
  // helper to clamp and format one channel
  const toHex = (value: number): string => {
    // clamp into [0,255]
    if (value < 0) value = 0;
    if (value > 255) value = 255;

    // convert to hex and pad with leading zero
    return value.toString(16).padStart(2, "0").toUpperCase();
  };

  // build the final string
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Examples
console.log(rgb(255, 245, 123));   // "FFF57B"
console.log(rgb(0, 0, 0));         // "000000"
console.log(rgb(300, -5, 10));     // "FF000A"
console.log(rgb(5, 16, 255));      // "0510FF"
console.log(rgb(128, 64, 32));     // "804020"
