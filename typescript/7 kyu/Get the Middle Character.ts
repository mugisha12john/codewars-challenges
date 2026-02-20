export function getMiddle(s:string) {
    let middle:number = s.length
    if(middle%2 === 0){
        return s.slice(middle/2 -1,middle/2+1)
    }
    else{
        return s.slice(middle/2 ,middle/2+1)
    }
}
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
console.log(getMiddle("test"))
console.log(getMiddle("middle"))
console.log(getMiddle("testing"))