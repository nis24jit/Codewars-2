function sortByPerfsq(arr) {
  const store = {};
  let used = [];
  let usedNums = [];
  arr.forEach((e) => {
    if (!usedNums.includes(e)) {
      permute([], String(e).split(''), e);
      usedNums.push(e);
      used = [];
    }
  });

  function permute(start, rest, num) {
    if (!rest.length) {
      if (isPerfect(+start.join('')) && !used.includes(+start.join(''))) {
        store[num] = ++store[num] || 1;
        used.push(+start.join(''));
      }
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      permute(
        [...start, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)],
        num
      );
    }
  }
  return arr.sort((a, b) => {
    const a1 = store.hasOwnProperty(a) ? store[a] : 0;
    const b1 = store.hasOwnProperty(b) ? store[b] : 0;
    return b1 - a1 || a - b;
  });
}

function isPerfect(n) {
  let i = 1;
  while (i * i <= n) {
    if (i * i !== n) {
      i++;
      continue;
    }
    return true;
  }
  return false;
}
