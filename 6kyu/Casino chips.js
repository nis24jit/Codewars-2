//Casino chips
function solve(arr) {
  let count = 0;
  arr = arr.sort((a, b) => b - a);
  while (arr[1]) {
    if (arr[2]) arr[2]--;
    else arr[1]--;
    count++;
    arr[0]--;
    arr[1] > arr[0] ? ([arr[1], arr[0]] = [arr[0], arr[1]]) : arr;
  }
  return count;
}
