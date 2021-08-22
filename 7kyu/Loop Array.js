function loopArr(arr, direction, steps) {
    if(direction === 'right') {
      return arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps ))
    }
    return arr.slice(steps).concat(arr.slice(0, steps))
  }