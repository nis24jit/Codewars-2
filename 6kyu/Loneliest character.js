//Loneliest character
function loneliest(str) {
  str = str.trim();
  if (str.length == 1) return [str];
  if (str.split("").filter((el) => el == " ").length == 0) return str.split("");
  let prev = 0;
  let next = 0;
  let max = -1;
  let res = [];
  let prevWord = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == " ") {
      next++;
    } else if (str[i] != " " && next == 0 && prev == 0) {
      prevWord = str[i];
    } else if (str[i] != " " && str[i - 1] != " " && i > 0) {
      if (max < prev) {
        max = prev;
        res = prevWord;
      } else if (max == prev) {
        res.push(prevWord);
      }
      prev = 0;
      prevWord = str[i];
      next = 0;
    } else if (str[i] != " " && next != 0) {
      if (max < prev + next) {
        max = prev + next;
        res = [prevWord];
      } else if (max == prev + next) {
        res.push(prevWord);
      }
      prevWord = str[i];
      prev = next;
      next = 0;
    }
  }
  return res;
}
