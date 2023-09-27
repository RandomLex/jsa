var point1 = {x: 10, y:20};
var point2 = {x: 10, y:20};

console.log(point1 === point2);   // false because of references comparing
console.log(point1 == point2);   // false. == doesn't help

var point3 = point1;

console.log(point1 === point3);   // true because they point to the same object

// There are no JavaScript build-in support for deep comparison of objects
// Can be done by for-in construction or by 3rd party libraries