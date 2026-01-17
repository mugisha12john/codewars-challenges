// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const nonZeros = arr.filter(item => item !== 0);
  const zeros = arr.filter(item => item === 0);
  return nonZeros.concat(zeros);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]) )
// returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
//[1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
console.log(moveZeros([ '5', '8', [], '5', {}, 2, 8, 2, '3', [], {}, '1', '4', true, '3', 
{}, 8, '0', '2', {}, 9, {}, null, '2', +0, +0 ] ))
// expected [ '5', '8', [], '5', {}, 2, 8, 2, '3', [], {}, '1', '4', true, '3', 
// {}, 8, '0', '2', {}, 9, {}, null, '2', +0, +0 ] 
// to deeply equal
//  [ '5', '8', [], '5', {}, 2, 8, 2, '3', [], {}, '1', '4', true, '3', {}, 8, '0', '2', {}, 9, {}, null, '2', +0 ]