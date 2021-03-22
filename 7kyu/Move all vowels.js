function moveVowel(input) {
  let vow = '';
  let other = '';
  for (let i = 0; i < input.length; i++) {
    'aeiou'.includes(input[i]) ? (vow += input[i]) : (other += input[i]);
  }
  return other + vow;
}
