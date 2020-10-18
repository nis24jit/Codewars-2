//Simple Events

function Event() {
  this.observers = [];
  this.subscribe = function (fn) {
    this.observers.push(fn);
  };

  this.unsubscribe = function (fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  };
  this.emit = function (...data) {
    this.observers.forEach((subscriber) => subscriber(...data));
  };
}
