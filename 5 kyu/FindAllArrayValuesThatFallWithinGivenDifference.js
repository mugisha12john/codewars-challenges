class GroupByDifference {
  constructor(numbers){
    this.numbers = numbers.sort((a,b)=>a-b)
  }
  find(range){
    let result = []
    this.numbers.forEach((element,index) => {
        let sum = element - (this.numbers[index+1] || 0)
        if(Math.abs(sum) <= range){
            result.push([element,this.numbers[index+1]])
        }
       
    });
    return result.flat(Infinity)
  }
}

// numbers = [5, 32, 5, 1, 31, 70, 30, 8]
// difference = 2

// Should Return
// [5, 5, 30, 31, 32]
const  numbers = new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8])
console.log(numbers.find(2))