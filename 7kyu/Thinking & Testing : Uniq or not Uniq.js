//Thinking & Testing : Uniq or not Uniq

function testit(a, b) {
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}