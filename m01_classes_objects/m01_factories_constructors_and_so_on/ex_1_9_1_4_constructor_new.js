// it's an example of constructor function
//It's time to complicate our idea of objects a little. With {} or new we do not really create an empty object.
//
// To create it, we use the implicitly generic Object constructor, on which most objects in JavaScript are built.
//
// The Object constructor contains some generic properties and methods that can be useful in all objects
// (including in the constructor property). What exactly does it mean to create an object on the basis of another object? We’ll explain this more in the part of the course concerning prototypes.
//
// At the moment, it’s enough to know that most of the objects we create inherit properties
// from the generic Object constructor object.
//
// Note that the inherited properties are not enumerated with the "for ... in" loop,
// nor Object.kesys nor Object.getOwnPropertyNames. They are available, we can use them,
// but they are treated slightly differently from the object's own properties.
//
// The name of the getOwnPropertyNames method does not appear by accident.

let ColoredPoint = function(x, y, color) {
  let _info = "object is under construction ...";
  let _color = color;
  console.log(_info);
  this.x = x;
  this.y = y;
  this.getColor = function() {return _color};
}

let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green");
console.log(coloredPoint1.getColor()); // red
console.log(coloredPoint2.getColor()); // green
console.log(coloredPoint1._color); // undefined

console.log("-----");

console.log(coloredPoint1.constructor.name); // ColoredPoint
console.log(coloredPoint1.constructor);

console.log("-----");
let a = {};
console.log(a.constructor); // [Function: Object]