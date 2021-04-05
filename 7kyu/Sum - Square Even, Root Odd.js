const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .map((num) => (num % 2 === 0 ? num ** 2 : num ** 0.5))
    .reduce((a, b) => +a + +b)
    .toFixed(2);
};
