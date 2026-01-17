function solve(s){
    let upper = s.split('').filter(a =>  {
        if(a === a.toUpperCase()){
            return a
        }
    })
    let lower = s.split('').filter(v=>{
        if(v === v.toLowerCase()){
            return v
        }
    })
    if(lower.length > upper.length || lower.length === upper.length){
        return s.toLowerCase()
    }
    else{
        return s.toUpperCase()
    }
}
console.log(solve("CODe"))