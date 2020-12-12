//Remove the parentheses
function removeParentheses(s) {
  let isParentheses = 0,
    res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") isParentheses++;
    if (!isParentheses && s[i]) {
      res += s[i];
    }
    if (s[i] == ")" && isParentheses) isParentheses--;
  }
  return res;
}
