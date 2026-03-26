// Your task is to find the next higher number (int) with the same number of 
// bits set in its binaryt representation, i.e. as many 1 bits as before, 
// but next higher than input. Input is always an int between 1 and 1<<30 (possibly inclusive). 
// No bad cases or special tricks.

// Some easy examples:
// Input: 129    => Output: 130    (10000001 => 10000010)
// Input: 127    => Output: 191    (01111111 => 10111111)
// Input: 1      => Output: 2      (01 => 10)
// Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101
export function nextHigher(n: number) {
  // 1. Convert to binary and add leading 0 (important!)
  let bin = "0" + n.toString(2);

  // 2. Find rightmost "01"
  let i = bin.lastIndexOf("01");

  // 3. Flip "01" → "10"
  bin = bin.slice(0, i) + "10" + bin.slice(i + 2);

  // 4. Count 1s on the right side
  let right = bin.slice(i + 2);
  let ones = [...right].filter(b => b === "1").length;
  let zeros = right.length - ones;

  // 5. Rebuild right side: all 0s then all 1s
  let newRight = "0".repeat(zeros) + "1".repeat(ones);

  // 6. Combine
  let resultBin = bin.slice(0, i + 2) + newRight;

  // 7. Convert back to decimal
  return parseInt(resultBin, 2);
}

console.log(nextHigher(127)); // 191