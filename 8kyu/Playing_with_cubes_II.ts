//Playing with cubes II

function Cube(n = 0) {
  this.side = n;
  this.getSide = function () {
    return this.side;
  };
  this.setSide = function (n) {
    if (isNaN(n) === true) {
      return;
    }
    this.side = Math.abs(n);
  };
}
