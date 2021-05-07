function presents(a) {
  const ans = [];
  for (let i = 0; i < a.length; i++) {
    ans[a[i] - 1] = i + 1;
  }
  return ans;
}
