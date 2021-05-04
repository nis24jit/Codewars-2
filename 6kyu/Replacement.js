function replacement(a) {
  if (a.length === 1) return [findNextNumber(a)];
  a = a.sort((a, b) => a - b).slice(0, -1);
  const minNum = findNextNumber(a);
  const res = [minNum, ...a].sort((a, b) => a - b);
  return res;
}

function findNextNumber(a) {
  let ans = null;
  let cur = 1;
  while (!ans) {
    if (a.every((num) => num === cur)) cur++;
    else ans = cur;
  }
  return ans;
}
