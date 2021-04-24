function twistedSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const cur = String(i)
      .split('')
      .reduce((acc, cur) => +acc + +cur, 0);
    ans += cur;
  }
  return ans;
}
