export function hexToDec(hexString:string):number{
  return +parseInt(hexString,16)
}


// test case 

// assert.equal(solution.hexToDec("1"), 1);
// assert.equal(solution.hexToDec("a"), 10);
// assert.equal(solution.hexToDec("10"), 16);
// assert.equal(solution.hexToDec("FF"), 255);
// assert.equal(solution.hexToDec("-C"), -12);