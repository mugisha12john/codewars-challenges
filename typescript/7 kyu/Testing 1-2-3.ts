export function number(array: string[]):string[]{
    let res:string[] = []
    for(let i=0;i<array.length;i++){
        res.push(`${i+1}: ${array[i]}`)
    }
    return res
}
console.log(number(["a", "b", "c"]))