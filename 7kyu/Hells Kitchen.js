function gordon(a) {
  let ans = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() === 'a') ans += '@';
    else if ('eiou'.includes(a[i].toLowerCase())) ans += '*';
    else if (a[i] === ' ') ans += '!!!! ';
    else ans += a[i].toUpperCase();
  }
  return ans + '!!!!';
}
