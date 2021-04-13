export function equalize(array:number[]):string[] {
  const n = array[0]
  return array.map(num => num - n >= 0 ? `+${num-n}` : `${num-n}`)
}