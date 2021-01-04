function array_diff_very_fast(a, b) {
    const obj = b.reduce((al, bl) => {
        al[bl] = 2;
        return al
    }, {})
    return a.filter(elem => !obj[elem])
}