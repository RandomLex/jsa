let point = {x: 1, y: 0};
let coloredPoint = {color: "red"};

// It is an old usage coloredPoint.__proto__ = point;  // deprecated
Object.setPrototypeOf(coloredPoint, point);
console.log(Object.getOwnPropertyNames(coloredPoint)); // contains just a [ 'color' ]
console.log(coloredPoint); // contains { color: 'red' }
console.log(coloredPoint.x); // It successfully inherits the x property from point and prints 1

coloredPoint.x = 100;
console.log(coloredPoint.x); // 100
console.log(point.x); // 1 - the point of original object is not changed
console.log(Object.getOwnPropertyNames(coloredPoint)); // [ 'color', 'x' ] because the x property is explicitly added to the coloredPoint object

