let circle1 = {
  radius: 100,
  center: {
    x: 0,
    y:0
  },
  getType: function() {
    return "circle1";
  }
};

let circle2 = {
  radius: 100,
  center: {
    x: 0,
    y:0
  },
  getType () {    // the function keyword is optional
    return "circle2";
  }
};

console.log(circle1.getType());
console.log(circle2.getType());
