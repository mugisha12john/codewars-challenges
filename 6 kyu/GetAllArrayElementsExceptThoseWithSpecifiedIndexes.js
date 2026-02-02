Array.prototype.except = function(keys)
{
    let a = keys
    return this.filter(el => {
        let index = this.indexOf(el)
        return !a.includes(index)
    })
}
var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']
console.log(array2)