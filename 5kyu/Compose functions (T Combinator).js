var compose = function (a, ...args) {
  return args.reduce((ac, fn) => fn(ac), a);
};
