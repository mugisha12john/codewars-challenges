//     The goal of this kata is to multiply two integers using the ancient Egyptian method, which only requires divisions and multiplications by two, and additions.

// Your function takes two integers as input. It shall return a list of the steps in the multiplication.

// Let m be the largest and n the smallest. While m is superior to 0, at each step:

// if m is not divisible by 2, add n to the list
// divide m by 2 (integer division)
// multiply n by 2
// At the end, return the list in descending order. The result of the multiplication is the sum of the list elements, but you have to return only the list.

// Input
// n and m integers, from 0 to 10,000. It is not guaranteed that m > n.

// Example
// m	n	m % 2	list
// 100	15	0	[]
// 50	30	0	[]
// 25	60	1	[60]
// 12	120	0	[60]
// 6	240	0	[60]
// 3	480	1	[480, 60]
// 1	960	1	[960, 480, 60]
// 0		0	[960, 480, 60]
// 100 * 15 = 1500 = 60 + 480 + 960

// So the expected result is [960, 480, 60].
function binMul(m, n) {
  let arr = []
  let start = m
  let curr= n
 
  while(start>=0){
    if(start%2 === 0){
      start = Math.floor(start/2)
      curr *= 2
    }
      start = Math.floor(start/2)
      curr *= 2
      arr.push(curr)
    
  }
  return arr
}
console.log(binMul(100,15))