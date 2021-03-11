function indexEqualsValue(a) {
  let l = 0
  let r = a.length-1
  let prev = -1
  while(l <= r) {
    let mid = l + Math.floor((r-l)/2)
    if(a[mid] === mid) {
      prev = mid
    } 
    if(a[mid] >= mid) {
      r = mid -1
    } else {
      l = mid + 1
    }
  }
  return prev
}
