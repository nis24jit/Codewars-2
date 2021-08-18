var generateColor = function() {
    let ans = '#'
    for(let i = 0; i < 7; i++) {
      ans+=Math.floor(Math.random()*16777215).toString(16)
    }
    return ans.slice(0,7)
  };