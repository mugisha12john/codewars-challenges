// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
export function cleanString(s: string):string {
	let result:string[] = []
    for(let i=0;i<s.length;i++){
		let index = i-1
		if(s[i] === '#'){
			result.pop(index)
		}else{
		result.push(`${s[i]}`)
		}
	}
	return result.join('')
}
console.log(cleanString("abc#d##c"))