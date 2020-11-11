// /Tetris Series #1 — Scoring System
export function getScore(arr: number[]) {
  let num: number[] = [0, 40, 100, 300, 1200];
  let c = 1;
  let p = 0;
  let m = 10;
  return arr.reduce((a: number, b: number, i) => {
    if (p >= m) {
      c++;
      m += 10;
    }
    p += b;
    return a + num[b] * c;
  }, 0);
}
