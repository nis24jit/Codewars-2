export function divisions(n: number, divisor: number): number {
  let count: number = 0;
  while(n >= divisor) {
    count++
    n=n/divisor
  }
  return count
}