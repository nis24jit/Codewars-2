function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function getPrimes(start, finish) {
  const tmp = start;
  start = Math.min(start, finish);
  finish = Math.max(tmp, finish);
  const arr = [];
  for (; start <= finish; start++) {
    if (isPrime(start)) arr.push(start);
  }
  return arr;
}
