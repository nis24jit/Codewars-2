var solution = (input, markers) =>
  input
    .split('\n')
    .map((y) => markers.reduce((a, b) => a.split(b)[0].trim(), y))
    .join('\n');
