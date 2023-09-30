// You shouldn't use arrow functions as methods, because they don't have their own this.
let circle = {
  radius: 200,      // can be commented out
  center: {
    x: 0,
    y:0
  },
  getType () {
    return (typeof this.radius === "number") ?
        "circle" : "unknown" ;
  }
};

console.log(circle.getType());

let figure = {...circle};
// we delete the radius property from the circle object
delete circle.radius;
// but it does not affect the figure object
console.log(figure.radius);
console.log(figure.getType());

