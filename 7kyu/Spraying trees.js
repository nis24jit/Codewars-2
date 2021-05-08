function task(w, n, c) {
  const names = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William',
  };
  return `It is ${w} today, ${
    names[w]
  }, you have to work, you must spray ${n} trees and you need ${
    c * n
  } dollars to buy liquid`;
}
