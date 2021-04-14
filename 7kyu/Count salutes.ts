export function countSalutes(hallway: String): number {
  hallway = hallway.replace(/-/g,'')
  let count = 0
  for(let i = 0; i < hallway.length; i++) {
    if(hallway[i] === '>') {
      for(let j = i+1; j < hallway.length; j++) {
        if(hallway[j] === '<') count+=2
      }
    }
  }
  return count
}