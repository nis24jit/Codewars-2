// Simple consecutive pairs

function pairs(ar) {
    let r = 0
    for (let i = 1; i < ar.length; i += 2) {
        if (ar[i] - 1 === ar[i - 1] || ar[i] + 1 === ar[i - 1]) r++
    }
    return r
};