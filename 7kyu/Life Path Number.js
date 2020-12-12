//Life Path Number

function lifePathNumber(dateOfBirth) {
    return getNumber(dateOfBirth.split('-').reduce((a,b)=>a+getNumber(b),0));
  }
  function getNumber(a){
    if(a<10) return +a
    return getNumber(String(a).split('').reduce((a,b) => +a + +b))
  }