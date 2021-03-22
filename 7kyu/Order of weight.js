function arrange(arr) {
  const ans = arr.map((e) => [
    e,
    e.includes('KG')
      ? parseInt(e) * 1000
      : e.includes('T')
      ? parseInt(e) * 1000000
      : parseInt(e),
  ]);
  return ans.sort((a, b) => a[1] - b[1]).map((e) => e[0]);
}
