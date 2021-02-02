var spiralize = function (n) {
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let i = 2;
  while (startRow < n) {
    if (i % 2 === 0) {
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = 1;
      }
      startRow++;
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = 1;
      }
      endColumn--;
      if (startRow - endRow == 0) break;
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = 1;
      }
      endRow--;
      for (let i = endRow; i > startRow; i--) {
        results[i][startColumn] = 1;
      }
      startColumn++;
      i++;
    } else {
      startRow++;
      endColumn--;
      endRow--;
      startColumn++;
      i++;
    }
  }
  let m = 1;
  let can = true;
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].length; j++) {
      if (
        i % 2 == 0 &&
        j == m &&
        i > 1 &&
        results[i][j] !== 1 &&
        i < n / 2 &&
        can === true
      ) {
        results[i][j] = 1;
        m += 2;
        can = false;
      }
      if (results[i][j] == undefined) {
        results[i][j] = 0;
      }
    }
    can = true;
  }
  return results;
};
