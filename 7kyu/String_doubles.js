//String doubles

function doubles(s){
    s = s.split('')
    let res = ''
      for(let i = 0; i < s.length; i++){
        if(s[i] == s[i+1]) {
          s.splice(i,2)
          i = -1
        }
      } 
    return s.join('')
  }