var calc = function (expression) {
  let s = expression.replace(/ /g, ""),
    num = "";
  const arr = [],
    number = "0123456789";
  for (let i = 0; i <= s.length; i++) {
    if (number.indexOf(s[i]) > -1) {
      num += s[i];
    } else if (number.indexOf(s[i]) == -1 || s[i]) {
      arr.push(num);
      num = "";
      arr.push(s[i]);
    }
  }
  let a = arr.slice(0, arr.length - 1).filter((e) => e != "");
  if (a.includes(".")) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === ".") {
        a.splice(i - 1, 3, a[i - 1] + "." + a[i + 1]);
      }
    }
  }
  while (a.indexOf("(") > -1) {
    const idx = a.lastIndexOf("(");
    const lastIdx = a.slice(idx).indexOf(")") + idx;
    const cur = a.slice(idx + 1, lastIdx);
    a.splice(idx, lastIdx - idx + 1, brace(cur));
  }
  return Number(brace(a));
};

function brace(string) {
  const number = "0123456789";
  if (string.length == 1) return string;
  if (string[0] == "-" && string[1] < 0) {
    return String(+string[1] * -1);
  }
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i - 1] == "*" || string[i - 1] == "/") &&
      string[i] == "-" &&
      (string[i + 1] < 0 || string[i + 1] > 0)
    ) {
      string.splice(i, 2, String(+string[i + 1] * -1));
      i++;
    } else if (string[i] == "-" && string[i + 1] == "-") {
      string.splice(i, 2, "+");
      i += 1;
    } else if (
      (string[i] == "+" && string[i + 1] == "-") ||
      (string[i] == "-" && string[i + 1] == "+")
    ) {
      string.splice(i, 2, "-");
      i += 1;
    } else if (string[i] === "-" && string[i + 1] < 0) {
      string.splice(i, 1, "+");
      string.splice(i + 1, 1, String(+string[i + 1] * -1));
    } else if (
      string[i] === "-" &&
      (i === 0 || number.indexOf(string[i - 1][0]) === -1)
    ) {
      string.splice(i, 2, "-" + string[i + 1]);
      i++;
    }
  }
  if (string.filter((e) => e != "-").length == 1) return String(+string);
  if (string[0] == "+" && string.length == 2) return String(+string);
  if (string[0] === "-" && string.length === 2) return String(+string);
  let go = true;
  if (!string.includes("/") && !string.includes("*")) go = false;
  while (go) {
    for (let i = 1; i < string.length; i += 2) {
      if (string[i] == "*") {
        const int = string[i - 1] * string[i + 1];
        string.splice(i - 1, 3, int);
        i = 0;
      } else if (string[i] == "/") {
        const int = string[i - 1] / string[i + 1];
        string.splice(i - 1, 3, int);
        i = 0;
      }
      if (!string.includes("/") && !string.includes("*")) go = false;
    }
  }
  while (string.length > 1) {
    for (let i = 1; i < string.length; i += 2) {
      if (string[i] == "+") {
        const int = +string[i - 1] + +string[i + 1];
        string.splice(i - 1, 3, int);
        i = 0;
      } else if (string[i] == "-") {
        const int = +string[i - 1] - +string[i + 1];
        string.splice(i - 1, 3, int);
        i = 0;
      }
    }
  }
  return String(+string);
}
