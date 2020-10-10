const int32ToIp = (num) => {
  num = num.toString(2);
  let result = [];
  for (let i = 0; i < num.length; i += 8) {
    result.push(parseInt(num.slice(i, i + 8).toString(), 2));
  }
  return result.length < 2 ? "0.0.0.0" : result.join(".");
};
