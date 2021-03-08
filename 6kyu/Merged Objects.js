function objConcat(o) {
  return o.reduce((a, b) => {
    Object.assign(a, b);
    return a;
  }, {});
}
