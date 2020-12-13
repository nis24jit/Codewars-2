// Interview Question (easy)

function getStrings(city) {
    const arr = []
    city = city.toLowerCase()
    let s = city.slice()
    s = [...new Set(s)].filter(e => e != ' ')
    for (let i = 0; i < s.length; i++) {
        arr.push(`${s[i]}:${'*'.repeat(city.split('').filter(el=>el===s[i]).length)}`)
    }
    return arr.join(',')
}