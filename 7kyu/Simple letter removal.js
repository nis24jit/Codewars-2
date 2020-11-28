//Simple letter removal
function solve(s, k) {
    const sk = s.split('').sort().slice(0, k)
    const obj = {};
    sk.forEach(v => obj[v] = obj[v] ? obj[v] + 1 : 1)
    s = s.split('').map(e => {
        if (obj[e] > 0) {
            obj[e]--
            return ''
        }
        return e
    })
    return s.join('')
}