function Interpreter() {
  this.values = [];
  this.valuesNumb = [];
  this.calc = function (expression) {
    let s = expression.slice(),
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
    if (!string.includes("/") && !string.includes("*") && !string.includes("%"))
      go = false;
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
        } else if (string[i] == "%") {
          const int = string[i - 1] % string[i + 1];
          string.splice(i - 1, 3, int);
          i = 0;
        }
        if (
          !string.includes("/") &&
          !string.includes("*") &&
          !string.includes("%")
        )
          go = false;
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
}

Interpreter.prototype.tokenize = function (program) {
  if (program === "") return [];

  var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
  return program.split(regex).filter(function (s) {
    return !s.match(/^\s*$/);
  });
};

Interpreter.prototype.input = function (expr) {
  var tokens = this.tokenize(expr);
  if (tokens.length === 0) return "";
  const a = "abcdefghijklmnopqrstuvwxyz";
  if (tokens.some((e) => a.toLowerCase().indexOf(e) > -1)) {
    const val = String(tokens.filter((e) => a.indexOf(e) > -1));
    const idx = this.values.indexOf(val);
    if (this.values.includes(val[0])) {
      if (expr.length === 1) return this.valuesNumb[idx];
      this.valuesNumb[idx] = this.calc([
        this.valuesNumb[idx],
        ...tokens.slice(1),
      ]);
      return this.valuesNumb[idx];
    } else {
      if (val.length > 1) {
        const id = this.values.indexOf(val[2]);
        const sum = this.calc([this.valuesNumb[id], ...tokens.slice(3)]);
        this.values.push(val[0]);
        this.valuesNumb.push(+sum - 3);
        return sum - 3;
      }
      try {
        if (expr.length === 1) throw new ReferenceError("Error");
        else {
          this.values.push(val);
          this.valuesNumb.push(+tokens[2]);
          return +tokens[2];
        }
      } catch (e) {
        throw new ReferenceError("Error");
      }
    }
  } else {
    return this.calc(tokens);
  }
};
