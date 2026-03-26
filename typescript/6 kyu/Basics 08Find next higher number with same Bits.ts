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
  let binary = "0" + n.toString(2);
  let i = binary.lastIndexOf("01");
  binary = binary.slice(0, i) + "10" + binary.slice(i + 2);
  let right = binary.slice(i + 2);
  let ones = [...right].filter(b => b === "1").length;
  let zeros = right.length - ones;
  let newRight = "0".repeat(zeros) + "1".repeat(ones);
  let resultbinary = binary.slice(0, i + 2) + newRight;
  return parseInt(resultbinary, 2);
}

console.log(nextHigher(127));