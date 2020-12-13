// Least Larger

function leastLarger(a, i) {
    const n = a[i]
    const ar = a.slice()
    return a.indexOf(ar.sort((a, b) => a - b).find(e => e > n))
}