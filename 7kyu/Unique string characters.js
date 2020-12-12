//Unique string characters

function solve(a, b) {
    return a.split('').filter(e => !b.includes(e)).join('') + b.split('').filter(e => !a.includes(e)).join('')
};