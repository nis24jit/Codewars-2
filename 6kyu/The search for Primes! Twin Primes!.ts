const findPrime = (n:number): boolean => {
    for(let i = 2; i < n; i++) {
      if(n % i === 0) return false
    } 
    return n > 1
  }
  
  
  export const twinPrime = (n: number): number => {
    const twinPrimes: number[] = []
    for(let i = 2; i <= n+1; i++) {
      const isPrime = findPrime(i) 
      isPrime && twinPrimes.push(i)
    }
    return twinPrimes.filter((num,i) => num + 2 === twinPrimes[i+1]).length
  }