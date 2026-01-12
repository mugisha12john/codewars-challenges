function exchangeWith(a, b) {
    let tem = [...a]
    a.length = 0
    for(let num of b){
        a.push(num)
    }
    b.length = 0
    for(let num of tem){
        b.push(num)
    }
    b.reverse()
    a.reverse()
}
my_array = ['a', 'b', 'c']
other_array = [1, 2, 3]
console.log(exchangeWith(my_array,other_array))
// # before
// my_array = ['a', 'b', 'c']
// other_array = [1, 2, 3]

// exchange_arrays(my_array, other_array)

// # after
// my_array == [3, 2, 1]
// other_array == ['c', 'b', 'a']