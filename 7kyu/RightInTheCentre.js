function isInMiddle([...seq]) {
  while (seq.length > 4) {
    seq.shift();
    seq.pop();
  }
  return seq.join("").lastIndexOf("abc") >= 0;
}
