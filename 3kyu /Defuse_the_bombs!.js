// 9
Bomb.diffuse.call(this);
// 8
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
// 7
Bomb.diffuse(global.BombKey);
// 6
diffuseTheBomb = () => true;
Bomb.diffuse();
// 5
Bomb.diffuse("3.14159");
// 4
Bomb.diffuse(new Date().setFullYear(2016));
// 3
Bomb.key = 43;
Object.defineProperty(Bomb, "key", { configurable: false, writable: false });
Bomb.diffuse(Bomb);

// 2
var obj = function () {
  var seen = false;
  this.valueOf = function () {
    if (seen) return 11;
    seen = true;
    return 9;
  };
};
Bomb.diffuse(new obj());
//1
var seen = false;
Math.random = function () {
  if (seen) return 1;
  seen = true;
  return 0.5;
};
Bomb.diffuse(42);
// 0
Array.prototype.valueOf = function () {
  return this.reduce((a, b) => a + b, 0);
};
Bomb.diffuse(new Buffer("Yes").toString("base64"));
