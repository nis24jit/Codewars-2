// String Task

function stringTask(s) {
    const v = 'aoyeui'
    return s.toLowerCase().split('').filter(e => !v.includes(e)).map(e => '.' + e).join('')
}