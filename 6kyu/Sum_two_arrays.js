function addArrays(array1, array2) {
  let arrayToNumber1 = parseInt(array1.join(""));
  let arrayToNumber2 = parseInt(array2.join(""));
  return String(arrayToNumber1 + arrayToNumber2)
    .split("")
    .map((el) => +el);
}
