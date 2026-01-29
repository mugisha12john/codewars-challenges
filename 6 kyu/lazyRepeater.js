function makeLooper(str) {
    return function(){
        let kk = str[Symbol.iterator]
        let n = 0
    
        
    }
}

let a = makeLooper('ki')
console.log(a())
console.log(a())


// const abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call