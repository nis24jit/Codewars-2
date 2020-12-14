//Sort Strings by Most Contiguous Vowels
function sortStringsByVowels(arr) {
  return arr.sort((a, b) => checkLengthVowels(b) - checkLengthVowels(a));
}
function checkLengthVowels(str) {
  if (str.length == 0) return 0;
  const vow = "aeiouAEIOU";
  let s = 0;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (vow.indexOf(str[i]) > -1) {
      s++;
    }
    if (vow.indexOf(str[i]) == -1) {
      s = 0;
    }
    if (s > max) max = s;
  }
  return max;
}
