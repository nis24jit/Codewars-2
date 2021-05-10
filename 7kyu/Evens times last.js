function evenLast(numbers) {
  if (!numbers.length) return 0;
  return (
    numbers.reduce((acc, num, i) => {
      return acc + (i % 2 === 0 ? num : 0);
    }, 0) * numbers[numbers.length - 1]
  );
}
