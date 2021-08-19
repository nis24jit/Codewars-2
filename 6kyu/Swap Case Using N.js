function swap(s, n) {
  const bits = String(n.toString(2));
  let j = 0;
  let ans = "";
  const valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (valid.includes(s[i])) {
      if (bits[j] == 1) {
        ans +=
          s[i].toLowerCase() === s[i] ? s[i].toUpperCase() : s[i].toLowerCase();
      } else {
        ans += s[i];
      }
      j++;
      if (j === bits.length) {
        j = 0;
      }
    } else {
      ans += s[i];
    }
  }
  return ans;
}
