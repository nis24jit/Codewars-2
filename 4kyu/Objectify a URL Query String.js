function convertQueryToMap(query) {
  if (typeof query === "undefined" || query.length === 0) return {};
  let obj = query.split("&").reduce((a, b) => {
    let [key, value] = b.split("=");
    let path = key.split(".");
    let last = path.splice(path.length - 1, 1)[0];
    let prev = path.reduce((objMap, part) => {
      if (!objMap[part]) {
        objMap[part] = {};
      }
      return objMap[part];
    }, a);
    prev[last] = decodeURIComponent(value);
    return a;
  }, {});
  return obj;
}
