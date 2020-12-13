// Mispelled word

var mispelled = function (word1, word2) {
    const w1 = word1.split('').filter(e => word2.includes(e))
    const w2 = word2.split('').filter(e => word1.includes(e))
    return ![word1.length - w1.length, word2.length - w2.length].some(e => e > 1)
}