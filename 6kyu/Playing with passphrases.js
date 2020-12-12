//Playing with passphrases
function playPass(s, n) {
  const specialSymbols = " !.,/-:(){}[]*^><?''";
  return s
    .split("")
    .map((el) => {
      const charCodeEl = el.toLowerCase().charCodeAt() + n;
      const idx =
        charCodeEl > 122 ? 97 + ((charCodeEl % 123) % 25) : charCodeEl;
      return specialSymbols.includes(el) || !isNaN(el)
        ? el
        : String.fromCharCode(idx);
    })
    .map((el) => (isNaN(el) || specialSymbols.includes(el) ? el : 9 - el))
    .map((el, i) =>
      i % 2 == 0 && isNaN(el)
        ? el.toUpperCase()
        : i % 2 != 0 && isNaN(el)
        ? el.toLowerCase()
        : el
    )
    .reverse()
    .join("");
}
