String.prototype.hashify = function (a) {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    if (!this[i + 1]) {
      if (obj[this[i]]) obj[this[i]] = [...obj[this[i]], this[0]];
      else obj[this[i]] = this[0];
    } else if (obj[this[i]]) obj[this[i]] = [...obj[this[i]], this[i + 1]];
    else obj[this[i]] = this[i + 1];
  }
  return obj;
};
