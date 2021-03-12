function pipeline(seed /*, args */) {
  for (let i = 1; i < arguments.length; i++) {
    seed = arguments[i](seed);
  }
  return seed;
}

function compose() {
  const args = arguments;
  function fn(a) {
    let res = a;
    for (let i = args.length - 1; i >= 0; i--) {
      res = args[i](res);
    }
    return res;
  }
  return fn;
}
