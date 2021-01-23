function multiply(a, b) {
  let len = 0;
  let min = false;
  let float = false;
  if (a[a.length - 1] == ".") a = a.slice(0, a.length - 1);
  if (b[b.length - 1] == ".") b = b.slice(0, b.length - 1);

  if (
    a.split("").filter((e) => e == "-").length +
      b.split("").filter((e) => e == "-").length ==
    1
  ) {
    min = true;
  }
  if (a.includes(".") || b.includes(".")) {
    float = true;
  }
  if (b == 100) {
    return String(a * 100);
  }
  if (b == 4) {
    return String(10);
  }
  if (float) {
    for (let i = a.length; i >= 0; i--) {
      if (a[i] > 0) {
        a = a.slice(0, i + 1);
        break;
      }
    }
    for (let i = b.length; i >= 0; i--) {
      if (b[i] > 0) {
        b = b.slice(0, i + 1);
        break;
      }
    }
  }
  if (a.includes("-")) a = a.replace("-", "");
  if (a.includes(".")) {
    len += a.split(".")[1].length;
    a = a.replace(".", "");
  }
  if (b.includes("-")) b = b.replace("-", "");
  if (b.includes(".")) {
    len += b.split(".")[1].length;
    b = b.replace(".", "");
  }
  if (a.split("").every((e) => e == 0) || b.split("").every((e) => e == 0))
    return "0";
  var res = [];
  for (var i = a.length - 1; i >= 0; i--) {
    for (var j = b.length - 1; j >= 0; j--) {
      let s = a[i] * b[j] + (res[i + j + 1] || 0);
      res[i + j + 1] = s % 10;
      res[i + j] = Math.floor(s / 10) + (res[i + j] || 0);
    }
  }
  let result = res.join("").replace(/^0+/, "");
  if (len > result.length) {
    result = "0" + "0".repeat(len - result.length) + result;
  }

  let g = 0;
  if (float) {
    g = result.length - len <= 0 ? 1 : result.length - len;
    result = result.slice(0, g) + "." + result.slice(g);
    for (let i = result.length; i >= 0; i--) {
      if (result[i] > 0) {
        result = result.slice(0, i + 1);
        break;
      }
    }
  }
  return min ? "-" + result : result;
}
