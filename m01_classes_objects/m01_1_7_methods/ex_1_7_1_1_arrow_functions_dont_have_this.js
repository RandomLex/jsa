let add1 = function (a, b) {
  console.log(this);    // always returns the global object
  return a + b
}

let add2 = (a, b) => {
  log(this);            // always returns {}
  return a + b;
};

console.log(add1(1, 2));
console.log(add2(1, 2));

// functions work the same way, but it is impossible to use this in arrow functions