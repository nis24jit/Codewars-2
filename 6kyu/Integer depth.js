function computeDepth(x) {
  const store = {};
  let ans = 0;
  let i = 1;
  while (ans !== 10) {
    String(x * i)
      .split('')
      .forEach((num) => {
        if (!store.hasOwnProperty(num)) {
          store[num] = true;
          ans++;
        }
      });
    i++;
  }
  return i - 1;
}
