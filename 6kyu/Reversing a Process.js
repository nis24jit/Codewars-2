function decode(r) {
  let num = parseInt(r);
  let arr = r.match(/[a-z]/g).map((x) => x.charCodeAt(0) - 97);
  let ans = '';

  for (let j = 0; j < arr.length; j++) {
    const char = arr[j];
    let x = false;
    for (let i = 0; i < 26; i++) {
      if ((i * num) % 26 === char) {
        if (x) return 'Impossible to decode';
        x = true;
        ans += String.fromCharCode(97 + i);
      }
    }
  }
  return ans;
}
