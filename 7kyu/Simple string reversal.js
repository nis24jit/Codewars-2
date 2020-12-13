// Simple string reversal

function solve(str) {
    let r = '',
        c = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            r += str[i]
        } else {
            if (str[str.length - c] === ' ') {
                c++
            }
            r += str[str.length - c]
            c++
        }
    }
    return r
}