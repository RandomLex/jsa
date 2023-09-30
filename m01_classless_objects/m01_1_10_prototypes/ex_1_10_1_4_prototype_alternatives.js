const figure1 = {
  getType() {
    return this.type ? this.type : "unknown";
  }
}

const circle1 = {
  type: "circle",
  center: {
    x: 10,
    y: 10,
  },
  radius: 120,
}

Object.setPrototypeOf(circle1, figure1);
console.log(circle1.getType()); // circle
const proto = Object.getPrototypeOf(circle1);
console.log(proto); // { getType: [Function: getType] }

console.log('------------------');

let circle2 = Object.create(figure1);
circle2.type = "circle";
circle2.center = {x: 10, y: 10};
circle2.radius = 120;
console.log(circle2.getType()); // circle
const proto2 = Object.getPrototypeOf(circle2);
console.log(proto2); // { getType: [Function: getType] }

console.log('------------------');
console.log(proto === proto2); // true