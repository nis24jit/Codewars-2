function bald(x) {
  const filtered = x.split('').filter((e) => e !== '/');
  const len = x.length - filtered.length;
  const word =
    len === 0
      ? 'Clean!'
      : len === 1
      ? 'Unicorn!'
      : len === 2
      ? 'Homer!'
      : len < 6
      ? 'Careless!'
      : 'Hobo!';
  return [
    x
      .split('')
      .map((e) => '-')
      .join(''),
    word,
  ];
}
