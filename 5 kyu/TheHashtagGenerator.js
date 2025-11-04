/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized, and remaining letters lowercased.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false*/
function generateHashtag (str) {
  let removeWhiteSpace = str.split(' ').filter(w=> w.length!==0)
  if(removeWhiteSpace.length === 0) return false
  let camelCase =  str.split(' ')
  .filter(a=> a.length!== 0)
  .map(word=> word[0].toUpperCase() + word.slice(1))
  .join('')
  if(`#${camelCase}`.length >140) return false
  return `#${camelCase}`
}
console.log(generateHashtag(" Hello there thanks for trying my Kata" ))
console.log(generateHashtag("         "))