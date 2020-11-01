//"Very Even" Numbers.

export function isVeryEvenNumber(n: number): boolean {
    if(n < 10){
      return n % 2 == 0
    }
    const num = String(n).split('').map(e=>+e).reduce((a,b) => a + b) 
    return isVeryEvenNumber(num)
}