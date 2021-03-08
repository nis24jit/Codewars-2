function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) throw new Error();
  obj[prop] = value;
}
