export function isUpperCase(str: string) : boolean {
    return str === str.toLocaleUpperCase() ? true : false
}
console.log(isUpperCase('kigali'))