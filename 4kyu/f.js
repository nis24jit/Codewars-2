//Explosive Sum

const mem = (n, fn) => {
    const memo = {}
    return (...arr) => {
        const i = n(...arr)
        return memo[i] || (memo[i] = fn(...arr))
    }
}
const count = mem(
    (n, a) => `${n}~${a}`,
    (n, a) => a > n ? 0 : a == n ? 1 : count(n - a, a) + count(n, a + 1)
)
const sum = (n) => count(n, 1)