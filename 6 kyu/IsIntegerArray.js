function isIntArray(arr) {
  if(!Array.isArray(arr)){
    return false
  }
  return arr.every(num=> Number.isInteger(num))
}
console.log(isIntArray([-11, -12, -13, -14]));
console.log(isIntArray([1, 2, null]));
console.log(Number(null))
