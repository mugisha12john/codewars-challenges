export function number(array: string[]):string[]{
    // let res:string[] = []
    // for(let i=0;i<array.length;i++){
    //     res.push(`${i+1}: ${array[i]}`)
    // }
    // return res
      return array.map((letter,index)=>{
    return `${index+1}: ${letter}`
  })
}
console.log(number(["a", "b", "c"]))