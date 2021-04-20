function wordToBin(str) {
  return str.split('').map((e) => '0' + e.charCodeAt(0).toString(2).slice());
}
