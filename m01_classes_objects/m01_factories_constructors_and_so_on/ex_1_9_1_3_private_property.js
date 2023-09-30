// it's an example of private property named _color
let createColorPoint = function(x, y, color) {
  let _info = "object is under construction ...";
  let _color = color;
  console.log(_info);
  return {
    x,
    y,
    get color() {return _color},
  };
};

let coloredPoint1 = createColorPoint(1, 1, "red"); // object is under construction ...
let coloredPoint2 = createColorPoint(2, 2, "green"); // object is under construction ...
console.log(coloredPoint1.color); // red
console.log(coloredPoint2.color); // green
console.log(coloredPoint1._color); // undefined