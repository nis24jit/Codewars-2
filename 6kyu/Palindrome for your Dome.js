//Palindrome for your Dome
function palindrome(string) {
  const s = string
    .toLowerCase()
    .split("")
    .filter((el) => el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123)
    .join("");
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}
