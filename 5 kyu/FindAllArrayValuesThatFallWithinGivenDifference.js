class GroupByDifference {
  constructor(numbers){
    this.numbers = numbers.sort((a,b)=>a-b)
  }
  find(range){
    let result = []
    // this.numbers.forEach((element,index) => {
    //     let sum = element - (this.numbers[index+1] || 0)
    //     if(Math.abs(sum) <= range){
    //        result.push([element,this.numbers[index+1]])
    //     } 
       
    // });
        this.numbers.forEach((element,index) => {
            let lastNumber = this.numbers[index-1]
            let nextNumber = this.numbers[index+1]
            let matchLastNumber = lastNumber !== undefined && Math.abs(element - lastNumber)<= range
            let nextMatchNumber = nextNumber !== undefined && Math.abs(element - nextNumber) <= range
            if(matchLastNumber || nextMatchNumber){
                result.push(element)
            }
       
    });
    
    return result
  }
}

// numbers = [5, 32, 5, 1, 31, 70, 30, 8]
// difference = 2

// Should Return
// [5, 5, 30, 31, 32]
const  numbers = new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8])
console.log(numbers.find(2))
// .find(3), [5,5,8,30,31,32]
// console.log(numbers.find(3))