function addArrays(array1, array2) {
  if (array1.length == 0 && array2.length == 0) return [];
  const res = [];
  (+array1.join("") + +array2.join(""))
    .toString()
    .split("")
    .forEach((el, i, arr) => (el === "-" ? (arr[i + 1] *= -1) : res.push(+el)));
  return res;
}
