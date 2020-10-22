//Backwards Read Primes

function backwardsPrime(start, stop) {
  const arr = [];
  for (let i = start; i <= stop; i++) {
    let reversed = +String(i).split("").reverse().join("");
    if (reversed != i) {
      if (isPrime(i) && isPrime(reversed)) {
        arr.push(i);
      }
    }
  }
  return arr;
}

function isPrime(e) {
  for (let i = 2; i * i <= e; i++) {
    if (e % i == 0) return false;
  }
  return e > 1;
}
