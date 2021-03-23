function hydrate(s) {
  const num = s
    .split('')
    .filter((e) => (isNaN(e) ? null : e))
    .reduce((a, b) => +a + +b);
  return `${num} ${num === 1 ? 'glass' : 'glasses'} of water`;
}
