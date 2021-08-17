function typist(s){
    let count = 0
    let shiftActive = false
      for(let i = 0; i < s.length; i++) {
        if( s[i] === s[i].toUpperCase() ) {
          count += shiftActive ? 1 : 2
          shiftActive = true
        } else {
          count += shiftActive ? 2 : 1
          shiftActive = false
        }
      }
    return count
}