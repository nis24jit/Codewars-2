function sumStrings(a, b) {
  var sum = '';
  var arr = [];
  var y = [0];
  var final = [];
  a = a.split('').reverse();
  b = b.split('').reverse();
  var x = Math.max(a.length, b.length);
  for (var i = 0; i < x; i++) {
    if (b[i] == undefined) b[i] = 0;
    if (a[i] == undefined) a[i] = 0;
    var sum = +a[i] + +b[i];
    if (sum > 9) {
      arr.push(sum - 10);
      y.push(1);
    } else {
      arr.push(sum);
      y.push(0);
    }
  }
  for (var i = 0; i < y.length; i++) {
    if (arr[i] == undefined) arr[i] = 0;
    if (+arr[i] + y[i] > 9) {
      if (arr[i + 1] == undefined) final.push(10);
      else {
        final.push(0);
        arr[i + 1] = +arr[i + 1] + 1;
      }
    } else {
      final.push(+arr[i] + +y[i]);
    }
  }
  var last = final.reverse().join('');
  return last[1] == 0 ? last.slice(2) : last[0] == 0 ? last.slice(1) : last;
}
