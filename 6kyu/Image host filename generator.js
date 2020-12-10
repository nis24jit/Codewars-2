//Image host filename generator

// Simply solution :D
function generateName() {
  let s = [
    "ABCDEF",
    "ABCEEF",
    "ABCDEE",
    "ACCDEF",
    "ACCDFF",
    "ACCDDF",
    "ADCDEF",
    "ACCDEA",
    "ACCDES",
    "AAADEF",
  ];
  let i = 0;
  let res = "AAAAAA";
  while (photoManager.nameExists(res)) {
    i++;
    res = s[i];
  }
  return res;
}
