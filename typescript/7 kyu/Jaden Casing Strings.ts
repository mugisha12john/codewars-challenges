String.prototype.toJadenCase = function () {
    let arr:string[] = this.split(' ').map(a=>{
        return a[0].toLocaleUpperCase() + a.slice(1)
    })
    return arr.join(' ')
}


interface String {      
  toJadenCase():string;
}
console.log("How can mirrors be real if our eyes aren't real".toJadenCase())