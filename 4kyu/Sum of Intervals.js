function sumIntervals(intervals) {
  var arr = [];
  intervals.forEach((w) => {
    for (var i = w[0]; i < w[1]; i++) {
      arr.push(i);
    }
  });
  return [...new Set(arr)].length;
}
