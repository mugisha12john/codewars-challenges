export function addLength(str: string): string[] {
    return str.split(' ').map(a=> `${a} ${a.length}`)
}
console.log(addLength('apple ban'))