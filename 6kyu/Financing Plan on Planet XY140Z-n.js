function finance(n) {
    let sum = 0, current = null;
    for (let i = 0; i < n+1; i++){ 
      current = (n + 1 - i) * (2 * i + 2 * i + (n - i)) / 2;
      sum += current;
    }
    return sum;
  }