// Duplicate sandwich

function duplicateSandwich(a) {
    let ar = []
    for (let i = 0; i < a.length; i++) {
        if (!ar.includes(a[i])) ar.push(a[i])
        else {
            return a.slice(ar.indexOf(a[i]) + 1, i)
        }
    }
    return []
}