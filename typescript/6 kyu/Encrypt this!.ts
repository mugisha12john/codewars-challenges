export const encryptThis = (str: string):string => {
  let arr:string[]=  str.split(' ')
  let result:string  = ''
  for(let i=0;i<arr.length;i++){
   result+= arr[i].charCodeAt(0)+arr[i][arr[i].length-1]+arr[i].slice(2,arr[i].length-1)+arr[i][1]
   result+=' '
  }
 return result
}
//console.log(encryptThis("hello world"))
console.log(encryptThis('84ryRpa 89xx 97TY 85ax 78TotKY'))
// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo"