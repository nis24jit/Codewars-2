//Simple max digit sum

function solve(n) {
    let largest = 0;
    if (n > 100000) {
        let s = String(n)
        if (s[1] == 9) {
            return +(s[0] + 8 + '9'.repeat(s.length - 2))
        } else {
            return +(s[0] - 1 + '9'.repeat(s.length - 1))
        }
    }
    for (let i = n; i > n - 5000; i--) {
        if (count(i) > count(largest)) {
            largest = i
        } else if (count(i) == largest) {
            largest = i > largest ? i : largest
        }
    }
    return largest
}

function count(i) {
    return String(i).split('').reduce((a, b) => +a + +b)
}