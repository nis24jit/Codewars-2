//A Rule of Divisibility by 13
function thirt(n) {
  const nums = [1, 10, 9, 12, 3, 4];
  let idx = 0,
    sum = 0,
    num = String(n);
  for (let i = num.length - 1; i >= 0; i--) {
    if (idx >= nums.length) idx = 0;
    sum += num[i] * nums[idx];
    idx++;
  }
  return n == sum ? sum : thirt(sum);
}
