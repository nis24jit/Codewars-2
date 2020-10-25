//Cryptanalysis Word Patterns
export function wordPattern(word: string): string {
  let s: string = "";
  let res: string = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (s.indexOf(word[i]) === -1) {
      s += word[i];
    }
    if (i < word.length - 1) {
      res += s.indexOf(word[i]) + ".";
    } else {
      res += s.indexOf(word[i]);
    }
  }
  return res;
}
