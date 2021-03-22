function paul(x) {
  if (!x.length) return 'Super happy!';
  const obj = {
    kata: 5,
    'Petes kata': 10,
    life: 0,
    eating: 1,
  };
  const sum = x.map((e) => obj[e]).reduce((a, b) => a + b);
  return sum < 40
    ? 'Super happy!'
    : sum < 70
    ? 'Happy!'
    : sum < 100
    ? 'Sad!'
    : 'Miserable!';
}
