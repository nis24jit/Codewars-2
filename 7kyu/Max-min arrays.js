//Max-min arrays

function solve(arr){
    const a = []
    let c = 0
    for(let i = 0; i <= arr.length; i++){
      if(c%2==0){
        const max = Math.max(...arr)
        a.push(max)
        arr.splice(arr.indexOf(max),1)
      }else{
        const min = Math.min(...arr)
        a.push(min)
        arr.splice(arr.indexOf(min),1)
      }
      c++
      i = 0
    }
    return a
  };