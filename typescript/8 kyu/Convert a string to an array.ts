export function stringToArray(s: string): string[] {
	return s.split(' ')
}
// "Robin Singh" ==> ["Robin", "Singh"]
console.log(stringToArray("Tobin singh"))