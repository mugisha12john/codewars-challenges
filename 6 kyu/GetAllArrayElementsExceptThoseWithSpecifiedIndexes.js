Array.prototype.except = function(keys)
{
    return this.filter((_,index)=> keys.indexOf(index) === -1)
}
var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']
console.log(array2)