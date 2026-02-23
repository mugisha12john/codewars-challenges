export function abbrevName(name: string): unknown {
    return name.split(' ').map(a=> a[0].toLocaleUpperCase()).join('.')
}
console.log(abbrevName('Sam Harris'))
// Sam Harris => S.H

// patrick feeney => P.F