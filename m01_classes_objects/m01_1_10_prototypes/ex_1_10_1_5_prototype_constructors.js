// The best prototyping is using a method based on constructors or Object.create.
let Figure = function() {
  this.getType = function() {
    return this.type ? this.type: "unknown";
  }
}
let figure = new Figure();

let Circle = function(center, radius) {
  this.type = "circle";
  this.center = center;
  this.radius = radius;
}
Circle.prototype = figure;

let circle1 = new Circle({x: 0, y: 0}, 10);
let circle2 = new Circle({x: 100, y: 100}, 200);

let Triangle = function(a, b, c) {
  this.type = "triangle";
  this.vertices = [a, b, c];
}
Triangle.prototype = figure;

let triangle1 = new Triangle({x: 0, y: 0}, {x: 50, y: 50}, {x: 10, y: 100});

console.log(circle1.getType());
console.log(circle2.getType());
console.log(triangle1.getType());

Circle.prototype.hi = function() {
  console.log(`Hi from ${this.getType()}!`);
}

circle1.hi(); // Hi from circle
circle2.hi(); // Hi from circle
triangle1.hi(); // Hi from triangle