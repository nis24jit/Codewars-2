function possibilities(str) {
  const ans = []
  permute(str)
  function permute(s) {
    if(!s.includes('?')) {
      ans.push(s)
      return
    }
    const curIndex = s.indexOf('?')
    const ones = s.split('').map((e,i) => curIndex === i ? '1' : e).join('')
    const zeroes = s.split('').map((e,i) => curIndex === i ? '0' : e).join('')
    permute(ones)
    permute(zeroes)
  }
  
  return ans;
};