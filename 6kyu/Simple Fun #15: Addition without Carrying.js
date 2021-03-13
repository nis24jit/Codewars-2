function additionWithoutCarrying(a, b) {
  a = String(a);
  b = String(b);
  let aLen = a.length - 1;
  let bLen = b.length - 1;
  let ans = [];
  while (aLen >= 0 || bLen >= 0) {
    if (aLen < 0) {
      ans.unshift(b[bLen]);
      bLen--;
    }
    if (0 > bLen) {
      ans.unshift(a[aLen]);
      aLen--;
    } else {
      const cur = String(+a[aLen] + +b[bLen]);
      ans.unshift(+String(cur)[cur.length - 1]);
      aLen--;
      bLen--;
    }
  }
  return +ans.join('');
}
