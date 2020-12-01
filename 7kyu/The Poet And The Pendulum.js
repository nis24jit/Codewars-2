//The Poet And The Pendulum
function pendulum(values) {
    let r = []
    let l = []
    values = values.sort((a, b) => a - b)
    for (let i = 0; i < values.length; i++) {
        if (i % 2 == 0) {
            r.push(values[i])
        } else {
            l.push(values[i])
        }
    }
    return values.length % 2 == 0 ? [...r.reverse(), ...l] : [...r.reverse(), ...l]
}