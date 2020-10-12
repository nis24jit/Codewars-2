const step = (g, m, n) => {
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
  return null;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
