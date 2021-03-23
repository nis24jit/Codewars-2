var splitInParts = function (s, partLength) {
  let ans = '';
  let count = partLength;
  for (let i = 0; i < s.length; i++) {
    ans += s[i];
    count--;
    if (count === 0) {
      ans += ' ';
      count = partLength;
    }
  }
  return ans.trim();
};
