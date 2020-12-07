function toChineseNumeral(num) {
  var numerals = {
    "-": "负",
    ".": "点",
    0: "零",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
    10: "十",
    100: "百",
    1000: "千",
    10000: "万",
  };

  let afterDot = "",
    s = "",
    minus = "";
  if (num < 0) {
    num = -1 * num;
    minus = numerals["-"];
  }
  if (num < 11 && !String(num).includes("."))
    return minus ? minus + numerals[num] : numerals[num];
  else if (num > 9 && num < 20 && !String(num).includes("."))
    return minus
      ? minus + numerals[10] + numerals[num % 10]
      : numerals[10] + numerals[num % 10];
  else if (String(num).includes(".")) {
    const splitNum = String(num).split(".");
    afterDot =
      numerals["."] +
      splitNum[1]
        .split("")
        .map((el) => numerals[el])
        .join("");
    num = +splitNum[0];
  }
  const thousands = Math.floor(num / 10000);
  const thousand = Math.floor((num % 10000) / 1000);
  const hundred = Math.floor(((num % 10000) % 1000) / 100);
  const tens = Math.floor((((num % 10000) % 1000) % 100) / 10);
  const n = Math.floor((((num % 10000) % 1000) % 100) % 10);
  s += thousands > 0 ? numerals[thousands] + numerals[10000] : "";
  s +=
    thousand > 0
      ? numerals[thousand] + numerals[1000]
      : moreThanZero(hundred, tens, n) || moreThanZero(thousands)
      ? numerals[0]
      : "";
  s +=
    hundred > 0
      ? numerals[hundred] + numerals[100]
      : moreThanZero(tens, n) || moreThanZero(thousands, thousand)
      ? numerals[0]
      : "";
  s +=
    tens > 0
      ? numerals[tens] + numerals[10]
      : moreThanZero(n) || moreThanZero(thousands, thousand, hundred)
      ? numerals[0]
      : "";
  s += n > 0 ? numerals[n] : "";

  while (s.includes("零零")) {
    s = s.replace(/零零/g, "零");
  }
  s[0] === "零"
    ? (s = s.slice(1))
    : s[s.length - 1] === "零"
    ? (s = s.slice(0, s.length - 1))
    : null;
  num === 0 ? (s = "零") : num < 11 ? (s = numerals[num]) : null;
  return minus + s + afterDot;
}
function moreThanZero(...args) {
  return args.every((el) => el > 0);
}
