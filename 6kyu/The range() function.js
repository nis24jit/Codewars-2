function range(start = 0, end, step = 1) {
  const arr = [];
  if ((start === 0 && !end) || end === 0) return [];
  if (start > 0 && !end) {
    end = start;
    start = 0;
  }
  if (step === 0) return Array(end - start).fill(start);
  for (; start < end; start += step) {
    arr.push(start);
  }
  return arr;
}
