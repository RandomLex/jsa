let createPoint1 = function(x, y) {
  let obj = {};
  obj.x = x;
  obj.y = y;
  return obj;
}
let point1 = createPoint1(1, 1);
let point2 = createPoint1(2, 2);
console.log(point1.x);
console.log(point2.x);

console.log("-----");
console.log("It is better to use the following way:");
let createPoint2 = function(x, y) {
  return {
    x: x,
    y: y
  };
}
let point3 = createPoint2(1, 1);
let point4 = createPoint2(2, 2);
console.log(point3.x);
console.log(point4.x);

console.log("-----");
console.log("But we can ommit the name of the property if it is the same as the name of the variable:");
let createPoint3 = function(x, y) {
  return {
    x,
    y
  };
}
let point5 = createPoint3(1, 1);
let point6 = createPoint3(2, 2);
console.log(point5.x);
console.log(point6.x);

console.log("-----");
console.log("The same can be done with arrow functions:");
let createPoint4 = (x, y) => ({x, y});

let point7 = createPoint4(1, 1);
let point8 = createPoint4(2, 2);
console.log(point7.x);
console.log(point8.x);