function solve(a, b) {
    let count = 0;
    if (!a.length) return 1;
    b.split('').forEach((el, i) => {
        if (el === a[0]) count += solve(a.slice(1), b.slice(i + 1))
    })
    return count;
}