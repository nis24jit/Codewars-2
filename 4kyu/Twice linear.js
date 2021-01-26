function dblLinear(n) {
  var obj = {}
  var arr = [1]
  var length = 0
  var index = 0
  while (length < n) {
    var x = arr.shift()
    var y = 2 * x + 1
    delete obj[x]
    if (!obj[y]) {
      for (var i = index; i < arr.length; i++) {
        if (arr[i] > y) {
          break
        }
      }
      arr.splice(i, 0, y)
      index = i
      obj[y] = true
    }
    var z = 3 * x + 1
    arr.push(z)
    length++
    obj[z] = true
  }
  return arr[0]
}
