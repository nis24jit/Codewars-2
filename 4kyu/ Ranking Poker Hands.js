var Result = {
  win: 1,
  loss: 2,
  tie: 3,
};

function PokerHand(hand) {
  this.hand = hand;
}

function royalFlush(arr) {
  let sum = false;
  const sorted = arr.sort((a, b) => b[0] - a[0]);
  if (
    arr.every((e) => e[1] === arr[0][1]) &&
    sorted[0][0] - sorted[4][0] === 4
  ) {
    return 10;
  }
  return 0;
}

function four(arr) {
  if (arr.filter((e) => e[0] === arr[0][0]).length === 4) {
    return 9;
  }
  if (arr.filter((e) => e[0] === arr[1][0]).length === 4) {
    return 9;
  }
  return 0;
}

function fullHouse(arr) {
  const sorted = arr.sort((a, b) => b[0] - a[0]);
  if (
    (sorted.slice(0, 3).every((e) => e[0] === sorted[0][0]) &&
      sorted.slice(3, 5).every((e) => e[0] === sorted[3][0])) ||
    (sorted.slice(0, 2).every((e) => e[0] === sorted[0][0]) &&
      sorted.slice(2, 5).every((e) => e[0] === sorted[2][0]))
  ) {
    return 8;
  }
  return 0;
}

function flush(arr) {
  if (arr.every((e) => e[1] === arr[0][1])) {
    return 7;
  }
  return 0;
}

function straight(arr) {
  const sorted = arr.sort((a, b) => b[0] - a[0]);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1][0] - sorted[i][0] !== 1) {
      return 0;
    }
  }
  return 6;
}

function three(arr) {
  if (
    arr.filter((e) => arr.filter((el) => el[0] == e[0]).length === 3).length ===
    3
  ) {
    return 4;
  }
  return 0;
}

function twoPair(arr) {
  const res = [];
  const sorted = arr.sort((a, b) => b[0] - a[0]).map((e) => e[0]);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted.lastIndexOf(sorted[i]) !== i && res.indexOf(sorted[i]) == -1) {
      res.push(sorted[i]);
    }
  }
  if (res.length === 2) return 3;
  return 0;
}

function two(arr) {
  const a = arr.map((e) => e[0]);
  if (a.filter((e, i) => a.lastIndexOf(e) !== i).length === 1) {
    return 2;
  }
  return 0;
}

PokerHand.prototype.compareWith = function (hand) {
  console.log(this.hand, hand.hand);
  const obj = {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  const left = this.hand
    .split(' ')
    .map((e) => (obj[e[0]] !== undefined ? [obj[e[0]], e[1]] : [e[0], e[1]]));
  const right = hand.hand
    .split(' ')
    .map((e) => (obj[e[0]] !== undefined ? [obj[e[0]], e[1]] : [e[0], e[1]]));
  const l = [
    royalFlush(left),
    four(left),
    fullHouse(left),
    flush(left),
    straight(left),
    three(left),
    twoPair(left),
    two(left),
  ];
  const r = [
    royalFlush(right),
    four(right),
    fullHouse(right),
    flush(right),
    straight(right),
    three(right),
    twoPair(right),
    two(right),
  ];
  const lHand = Math.max(...l);
  const rHand = Math.max(...r);
  if (lHand > rHand) return 1;
  else if (rHand > lHand) return 2;
  else {
    if (lHand == 10 || lHand == 7 || lHand == 6) {
      let sumL = 0;
      let sumR = 0;
      for (let i = 0; i < left.length; i++) {
        sumL += +left[i][0];
      }
      for (let i = 0; i < right.length; i++) {
        sumR += +right[i][0];
      }
      return sumL > sumR ? 1 : sumL < sumR ? 2 : 3;
    } else if (lHand == 9) {
      const unique = [...new Set(left.map((e) => e[0]))];
      const f = left.filter((e) => e == unique[0]);
      const lS = f === 1 ? unique[1] : unique[0];
      const uniqueR = [...new Set(right.map((e) => e[0]))];
      const s = left.filter((e) => e == uniqueR[0]);
      const rS = f === 1 ? uniqueR[1] : uniqueR[0];
      return rS > lS ? 2 : rS < lS ? 1 : 3;
    } else if (lHand == 8) {
      const lSum = left.map((e) => +e[0]).sort((a, b) => b - a);
      const rSum = right.map((e) => +e[0]).sort((a, b) => b - a);
      for (let i = 0; i < lSum.length; i++) {
        if (lSum[i] > rSum[i]) {
          return 1;
        } else if (lSum[i] < rSum[i]) {
          return 2;
        }
      }
      return 3;
    } else if (lHand === 4) {
      const l = [...new Set(left.map((e) => e[0]))];
      const r = [...new Set(right.map((e) => e[0]))];
      const lSum = +l.filter(
        (e) => left.filter((el) => el[0] === e).length === 3
      );
      const rSum = +r.filter(
        (e) => right.filter((el) => el[0] === e).length === 3
      );
      if (lSum > rSum) return 1;
      else if (lSum < rSum) return 2;
      else {
        const lRes = left.map((e) => +e[0]);
        const rRes = right.map((e) => +e[0]);
        for (let i = 0; i < lRes.length; i++) {
          if (lRes[i] > rRes[i]) {
            return 1;
          } else if (lRes[i] < rRes[i]) {
            return 2;
          }
        }
        return 3;
      }
    } else if (lHand === 0) {
      const lSum = left.map((e) => e[0]).sort((a, b) => b - a);
      const rSum = right.map((e) => e[0]).sort((a, b) => b - a);
      for (let i = 0; i < lSum.length; i++) {
        if (lSum[i] > rSum[i]) {
          return 1;
        } else if (lSum[i] < rSum[i]) {
          return 2;
        }
      }
      return 3;
    } else if (lHand === 2) {
      const l = [...new Set(left.map((e) => e[0]))];
      const r = [...new Set(right.map((e) => e[0]))];
      const lSum = +l.filter(
        (e) => left.filter((el) => el[0] === e).length === 2
      );
      const rSum = +r.filter(
        (e) => right.filter((el) => el[0] === e).length === 2
      );
      if (lSum > rSum) return 1;
      else if (lSum < rSum) return 2;
      else {
        const lRes = left.map((e) => +e[0]);
        const rRes = right.map((e) => +e[0]);
        for (let i = 0; i < lRes.length; i++) {
          if (lRes[i] > rRes[i]) {
            return 1;
          } else if (lRes[i] < rRes[i]) {
            return 2;
          }
        }
        return 3;
      }
    } else if (lHand === 3) {
      const arrLeft = toArr(left.map((e) => +e[0]));
      const arrRight = toArr(right.map((e) => +e[0]));
      for (let i = 0; i < arrLeft.length; i++) {
        if (arrRight[i] > arrLeft[i]) {
          return 2;
        } else if (arrLeft[i] > arrRight[i]) {
          return 1;
        }
      }
      return 3;
    }
  }
};
function toArr(arr) {
  const pairs = [];
  const one = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) === i && pairs.indexOf(arr[i]) === -1) {
      one.push(arr[i]);
    } else if (pairs.indexOf(arr[i]) === -1) {
      pairs.push(arr[i]);
    }
  }
  return [...pairs, ...one];
}
