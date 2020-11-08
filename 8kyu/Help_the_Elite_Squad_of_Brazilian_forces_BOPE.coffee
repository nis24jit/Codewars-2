# Help the Elite Squad of Brazilian forces BOPE

magNumber=(info)->
  if info[0] == 'PT92'
    return Math.ceil(info[1]*3 / 17)
  else if info[0] == 'PSG1'
    return Math.ceil(info[1]*3 / 5)
  else 
    return Math.ceil(info[1]*3 / 30)