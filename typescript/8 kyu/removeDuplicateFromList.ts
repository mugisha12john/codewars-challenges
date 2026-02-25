export const distinct = (a: number[]) =>
  a.reduce<Record<number, number>>((acc, curr) => {
    acc[curr] = (acc[curr] ?? 0) + 1
    return acc
  }, {})
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
console.log(distinct([1,1,2]))
console.log(distinct([1,2,1,1,3,2]))