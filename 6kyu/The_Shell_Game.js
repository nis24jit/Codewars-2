// The Shell Game
find_the_ball = function (start, swaps) {
  let swaped = start;
  swaps.forEach((el, i) => {
    swaped = el[0] === swaped ? el[1] : swaped === el[1] ? el[0] : swaped;
  });
  return swaped;
};
