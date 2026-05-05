function findUnique(numbers) {
    let a =  numbers.reduce((a,b)=>{
        a[b] = (a[b] || 0) +1
        return a
    },{})
    for (const key in a) {
        if(a[key] === 1){
            return key
        }
    }
}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ] ))