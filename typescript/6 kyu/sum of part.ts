// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// this works but issues is perfomance of execution it take much time 
// export function partsSums(ls: number[]) {
//     let times:number = ls.length
//     let result:number[] = []
//     while(times >= 0){
//         let a = ls.slice(times).reduce((a,b)=> a+b,0)
//         result.push(a)
//         times--
//     }
//     return result.reverse()
// }

export function partsSums(ls: number[]): number[] {
  let total = ls.reduce((a, b) => a + b, 0);
  const result: number[] = [total];

  for (let i = 0; i < ls.length; i++) {
    total -= ls[i];
    result.push(total);
  }

  return result;
}
console.log(partsSums([0,1,3,6,10]))