device.decode = function (w) {
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';
  const obj = {};
  let res = '';
  str.split('').forEach((e) => {
    let cur = '';
    w.split('').forEach((el) => {
      cur += e;
    });
    obj[device.encode(cur)] = e;
  });
  return w
    .split('')
    .map((e, i) => {
      for (let key in obj) {
        if (key[i] === e) {
          return obj[key];
        }
      }
    })
    .join('');
};
