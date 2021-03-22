const palindromePairs = (words) => {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (isPalindrom(String(words[i]) + String(words[j])) && i !== j)
        ans.push([i, j]);
    }
  }
  return ans;
};

function isPalindrom(s) {
  return s === s.split('').reverse().join('');
}
