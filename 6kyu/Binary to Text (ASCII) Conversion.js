// Binary to Text (ASCII) Conversion
function binaryToString(binary) {
  let s = "";
  for (let i = 0; i < binary.length; i += 8) {
    s += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return s;
}
