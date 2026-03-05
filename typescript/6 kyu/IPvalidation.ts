export function isValidIP(str: string): boolean {
  let part = str.split('.')
  
  if(part.length !== 4) return false
  for(let parts of part){

    if(!/^\d+$/.test(parts)) return false
    if(parts.length > 1 &&parts.startsWith("0")) return false
      const num = Number(parts);
    if (num < 0 || num > 255) return false;
    
  }
  return true
}

console.log(isValidIP('a137.255.156.100'))

console.log(isValidIP('a137.255.156.100'))