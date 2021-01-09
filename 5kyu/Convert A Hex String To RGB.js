function hexStringToRGB(hexString) {
  const obj = {};
  obj.r = parseInt(hexString.slice(1, 3), 16);
  obj.g = parseInt(hexString.slice(3, 5), 16);
  obj.b = parseInt(hexString.slice(5, 7), 16);
  return obj;
}
