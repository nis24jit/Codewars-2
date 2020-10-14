//Find the smallest
function smallest(n) {
  let min = [n, 0, 0];
  const numbers = [...String(n)];
  let copy = [];
  for (let i = 0; i < numbers.length; i++) {
    let arr = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
    for (let j = 0; j < numbers.length; j++) {
      copy = +[...arr.slice(0, j), numbers[i], ...arr.slice(j)].join``;
      min = min[0] > copy ? [copy, i, j] : min;
    }
  }
  return min;
}
