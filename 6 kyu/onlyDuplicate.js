function onlyDuplicates(str) {
    let occurance = str.split('').reduce((a,b)=>{
        a[b]=(a[b]||0) +1
        return a
    },{})
    let result = ''
    for(let i=0;i<str.length;i++){
       occurance[str[i]] > 1 ? result+=str[i] : 0
    }
    return result
}
// input: "abccdefee"

// output: "cceee"
console.log(onlyDuplicates("abccdefee"))