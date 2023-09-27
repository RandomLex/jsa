let nr = 10;
let b = false;
let str = "uno dos tres";
let arr = [10, 20, 30];
let obj = {
  x: 10,
  y: 20
};
let fn = function(arg) {
  console.log(arg)
};

fn(123); //-> 123


// also it can be included inside another object

let test = {
  nr: 10,
  b: false,
  str: "uno dos tres",
  arr: [10, 20, 30],
  obj: {
    x: 10,
    y: 20
  },
  fn: function(arg) {console.log(arg)}
};

test.fn(123);
console.log(test.obj.x);
test.obj.y = 40;
console.log(test.obj.y);
