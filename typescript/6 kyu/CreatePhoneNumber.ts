export function createPhoneNumber(numbers: number[]) {
  return numbers.join('').toString().match(/^[0-9]{3}:[0-9]{3}:[0-9]{4}$/gmi)
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))