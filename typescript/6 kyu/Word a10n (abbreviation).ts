export function abbreviate(str: string): string {
  return str.replace(/\b[a-zA-Z]{4,}\b/,(word)=>{
    let len = word.length 
    return word[0] + (len-2) + word[len-1]
  })
}

console.log(abbreviate('internationalization'))