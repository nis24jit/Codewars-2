const memo = {};
function gap(g, m, n) {
  const secondArr = [];
  let prev = 0;
  for (let i = m; i <= n; i++) {
    if (memo[i]) {
      if (!prev) {
        prev = memo[i];
      } else if (prev) {
        if (memo[i] - prev === g && checkPrimesInGap(prev, i)) return [prev, i];
        else prev = i;
      }
      secondArr.push(i);
    } else if (isPrime(i)) {
      if (!prev) {
        prev;
      }
      if (prev) {
        if (i - prev === g && checkPrimesInGap(prev, i)) return [prev, i];
        else prev = i;
      }
      memo[i] = i;
      prev = i;
    }
  }
  return null;
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const checkPrimesInGap = (n, m) => {
  for (let i = n + 1; i < m; i++) {
    if (memo[i]) {
      return false;
    }
  }
  return true;
};
