//Return String As Sorted Blocks
function blocks(s) {
  let sorted = [];
  const res = [];
  s = s.split("");
  while (s.length) {
    for (let i = 0; i < s.length; i++) {
      if (sorted.filter((el) => el === s[i]).length == 0) {
        sorted.push(s[i]);
        s.splice(i, 1, "");
      }
    }
    s = s.filter((el) => el !== "");
    let lower = sorted
      .filter((el) => el.toLowerCase() == el && el != +el)
      .sort();
    let upper = sorted
      .filter((el) => el.toUpperCase() == el && el != +el)
      .sort();
    let num = sorted.filter((el) => +el == el).sort((a, b) => +a - +b);
    res.push([...lower, ...upper, ...num].join(""));
    sorted = [];
  }
  return res.join("-");
}
