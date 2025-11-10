/*Find the most common letter (not a space) in the given string
(comprised of at least 3 lowercase words) and replace it with the given letter.

If such letters are two or more, choose the one that appears earliest in the string.

For example:
  ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
  ('real talk bro', 'n') => 'neal talk bno'
  ('great job go ahead', 'k') => 'grekt job go khekd'*/

function replaceCommon(string, letter) {
  const common =  string.toLowerCase().replace(/[^a-z]/g, '')
  .split('').reduce((a,b)=> {
    a[b] = (a[b] || 0 )+1
    return a
  },{})
  
  const maxOccur  =  Math.max(...Object.values(common))
  let mostLetter 
  for ( let letter in common){
    
    if(common[letter] === maxOccur){
      mostLetter = letter
      break;
    }
  }
  const regex = new RegExp(mostLetter, 'gi');
  return string.replace(regex,letter)
}
//console.log(replaceCommon('my mom loves me as never did', 't'))
console.log(replaceCommon('real talk bro', 'n'))