function cache(func) {
  const cache = {};
  return function () {
    if (cache.hasOwnProperty(JSON.stringify(arguments)))
      return cache[JSON.stringify(arguments)];
    cache[JSON.stringify(arguments)] = func.apply(null, arguments);
    return cache[JSON.stringify(arguments)];
  };
}
