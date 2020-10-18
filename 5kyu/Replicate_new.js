//Replicate `new`

function nouveau(Constructor, ...args) {
  let res = {};
  Object.setPrototypeOf(res, Constructor.prototype);
  const exec = Constructor.apply(res, args);
  return (typeof exec === "object" && exec != null) ||
    typeof exec === "function"
    ? exec
    : res;
}
