//Consecutive letters

function solve(s){
    let a = 'abcdefghijklmnopqrstuvwxyz'
    s = s.split('').sort((a,b)=>a.localeCompare(b))
    return a.slice(a.indexOf(s[0]),a.indexOf(s[0])+s.length) == s.join('')
}