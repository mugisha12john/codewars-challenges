function twoSum(numbers, target) {
    let pairs = []
    for(let i=0;i<numbers.length;i++){
        for(let j= i+1;j<numbers.length;j++){
            if(numbers[i] + numbers[j] == target){
                pairs.push(i,j)
            }
        }
    }
    return pairs
}
console.log(twoSum([1,2,3],4))
console.log(twoSum([3,2,4],6))
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
