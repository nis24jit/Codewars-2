// Nth power rules them all!

function modifiedSum(a, n) {
    return a.reduce((a, b) => a + b ** n - b, 0)
}