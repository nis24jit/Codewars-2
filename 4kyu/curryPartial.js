function curryPartial(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...rest) => curryPartial(fn, ...args, ...rest);
  }
}
