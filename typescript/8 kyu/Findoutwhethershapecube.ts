export function cubeChecker(volume: number, side: number): boolean{
  if(side <=0 || volume<=0){
    return false
  }
  let sideVolume = Math.pow(side,3)
  return sideVolume === volume ? true : false
}