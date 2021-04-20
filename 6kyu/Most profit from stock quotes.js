function getMostProfitFromStockQuotes(s) {
  let max = Math.max(...s);
  let ans = [];
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === max) {
      res += ans.reduce((a, b) => a + (max - b), 0);
      max = Math.max(...s.slice(i + 1));
      ans = [];
    } else {
      ans.push(s[i]);
    }
  }
  return res;
}
