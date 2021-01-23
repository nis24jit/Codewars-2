function validateBattlefield(field) {
  var arr = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  let shipHorizontalCount = [];
  let indexesOfShip = [];
  let shipVerticalCount = [];
  let singleShips = [];
  let four = 0;
  let three = 0;
  let two = 0;
  for (let i = 0; i < field.length; i++) {
    arr.push([]);
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] == 1) {
        arr[i + 1].push(j + 2);
      } else {
        arr[i + 1].push(0);
      }
    }
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i][j + 1] - 1 && arr[i][j] !== arr[i][j - 1] + 1) {
        let countOfShips = arr[i].slice(j).indexOf(0);
        shipHorizontalCount.push(countOfShips);
        indexesOfShip.push(arr[i].slice(j, j + countOfShips));
      }
      if (
        arr[i][j] !== 0 &&
        arr[i][j] == arr[i - 1][j] &&
        arr[i][j] == arr[i + 1][j] &&
        arr[i + 1][j] == arr[i + 2][j]
      ) {
        shipVerticalCount.push(4);
      } else if (
        arr[i][j] !== 0 &&
        arr[i][j] == arr[i - 1][j] &&
        arr[i][j] == arr[i + 1][j] &&
        arr[i + 1][j] !== arr[i + 2][j] &&
        arr[i][j] !== arr[i - 2][j]
      ) {
        shipVerticalCount.push(3);
      } else if (
        arr[i][j] !== 0 &&
        arr[i][j] == arr[i - 1][j] &&
        arr[i][j] !== arr[i - 2][j] &&
        arr[i][j] !== arr[i + 1][j]
      ) {
        shipVerticalCount.push(2);
      } else if (
        arr[i][j] !== 0 &&
        arr[i][j - 1] == 0 &&
        arr[i][j + 1] == 0 &&
        arr[i - 1][j] == 0 &&
        arr[i + 1][j] == 0
      ) {
        singleShips.push(1);
      }

      if (
        arr[i - 1].includes(arr[i][j] - 1) ||
        arr[i - 1].includes(arr[i][j] + 1)
      ) {
        return false;
      }
    }
  }
  let resultArr = Array(shipVerticalCount, ",", shipHorizontalCount).join("");
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == 4) four++;
    if (resultArr[i] == 3) three++;
    if (resultArr[i] == 2) two++;
  }
  return four == 1 && three == 2 && two == 3 && singleShips.length == 4;
}
