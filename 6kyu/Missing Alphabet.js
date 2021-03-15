function insertMissingLetters(str) {
  const store = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((e) => (str.includes(e) ? e : e.toUpperCase()));
  const used = [];
  return str
    .split('')
    .map((e) => {
      const idx = store.indexOf(e);
      if (used.includes(e)) return e;
      used.push(e);
      return (
        e +
        store
          .slice(idx)
          .filter((char) => char.toUpperCase() === char)
          .join('')
      );
    })
    .join('');
}
