//Simple number sequence

function missing(s) {
  let first;
  let j = 1;
  const arr = [];
  let res = [];
  let prev = +s.slice(0, j);
  for (let i = j; i < s.length; i += j) {
    let cur = +s.slice(i, i + j);
    let next = +s.slice(i, i + j + 1);
    if (next - prev == 1 || next - prev == 2) {
      j++;
      prev = +s.slice(i, i + j);
      res.push(prev);
    } else if (
      cur - prev != 1 &&
      cur - prev != 2 &&
      next - prev != 1 &&
      next - prev != 2
    ) {
      j++;
      i = 0;
      prev = +s.slice(0, j);
      res = [];
    } else {
      if (!first) {
        first = prev;
      }
      res.push(cur);
      prev = cur;
    }
    arr.push([prev, cur, next, i, j]);
  }
  const len =
    +s.slice(0, String(res[0]).length - 1) == 9999 &&
    +s.slice(4, 3 + String(res[0]).length + 1) == 10001
      ? 9999
      : s.slice(0, String(res[0]).length);
  res.unshift(len);
  const ans = [];
  res[1] - res[0] > 2 && res[1] - res[0] > 0
    ? String(res[0]).split("").pop().join("")
    : null;
  for (let i = 1; i < res.length; i++) {
    if (res[i] - res[i - 1] == 2) {
      ans.push(res[i] - 1);
    } else if (res[i] - res[i - 1] == 3) {
      ans.push(res[i] - 1);
    }
  }
  return ans.length == 1 ? ans[0] : -1;
}
