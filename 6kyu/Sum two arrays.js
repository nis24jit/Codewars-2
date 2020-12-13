// Sum two arrays

function addArrays(array1, array2) {
    const r = String(+array1.join('') + +array2.join('')).split('')
    const res = r.map((e, i) => e == '-' ? r[i + 1] = -1 * r[i + 1] : +e)
    return res[0] <= 0 ? res.slice(1) : res
}