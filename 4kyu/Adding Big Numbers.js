function add(a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();

  var x = 0;
  var index = 0;
  var arr = [];
  while (index < a.length || index < b.length || x != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + x;

    arr.push((digitSum % 10).toString());
    x = Math.floor(digitSum / 10);
    index++;
  }
  arr.reverse();
  while (arr[0] == '0') arr.shift();
  return arr.join('');
}
