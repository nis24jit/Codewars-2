//Single character palindromes
function solve(s) {
  for (let i = 0; i < s.length; i++) {
    if (check(s)) return "OK";
    else if (check(s.slice(0, i) + s.slice(i + 1))) {
      return "remove one";
    }
  }
  return "not possible";
}
function check(s, i, w) {
  return s.split("").reverse().join("") == s;
}
