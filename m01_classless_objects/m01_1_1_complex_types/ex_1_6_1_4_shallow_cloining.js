let point0 = {x: 10, y: 20};
let point1 = point0;  // copy reference
let point2 = Object.assign(point0);
let point3 = {};
Object.assign(point3, point0);
// Object.assign(point3, point0, point1, point2, {asd: 123}, {x: 15});  // most right-handed argument wins

console.log(point2);
console.log(point0 === point1)
console.log(point0 === point2)

console.log(point3);
console.log(point0 === point3);

let point4 = Object.assign({}, point0); // Object.assign returns target object
console.log(point4);
let point5 = Object.assign({}, point0, {asd: 123});
console.log(point5);

//There is an example of 'spread' operator. It works using different mechanism, but here result will be same
let point6 = {...point0};
console.log(point6);
let point7 = {...point0, asd: 123};
console.log(point7);

// Two synonyms written using ...
let point8 = {...point0, z: 50, color: 'red'};
console.log(point8);
let point9 = {...point0, ...{z: 50, color: 'red'}};
console.log(point9);

// Neither Object.assign() nor ... provides deep cloning
let circle0 = {
  radius: 10,
  center: {
    x: 5,
    y: 15
  }
}
let circle1 = {...circle0};
circle0.radius = 20;
circle0.center.x = 25;
console.log(circle1); // only reference of the 'center' has been copied
console.log(circle0 === circle1);               // false
console.log(circle0.center === circle1.center); // true