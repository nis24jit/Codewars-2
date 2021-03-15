function mergesorted(a, b) {
  const ans = [];
  let l = 0;
  let r = 0;
  while (l < a.length && r < b.length) {
    if (a[l] && b[r]) {
      if (a[l] > b[r]) {
        ans.push(b[r]);
        r++;
      } else {
        ans.push(a[l]);
        l++;
      }
    }
  }
  if (b.length <= r) {
    for (let i = l; i < a.length; i++) {
      ans.push(a[i]);
    }
  }
  if (a.length <= l) {
    for (let i = r; i < b.length; i++) {
      ans.push(b[i]);
    }
  }
  return ans;
}
