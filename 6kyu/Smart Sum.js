function smartSum() {
    return flattenArray(Array.from(arguments)).reduce((a, b) => a + b)
}

function flattenArray(arr) {
    return arr.reduce((a, b) =>
        Array.isArray(b) ? a.concat(flattenArray(b)) : a.concat(b), [])
}