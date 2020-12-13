// Mirror, mirror, on the wall...

function mirror(d) {
    const data = d.slice()
    if (data.length < 2) return data
    return data.sort((a, b) => a - b).slice(0, data.length - 1).concat(data.sort((a, b) => b - a))
}