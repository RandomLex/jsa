let figure = {
  getType: function() {
    return this.type ? this.type : "unknown";
  }
};

let circle = {
  type: "circle",
  center: {
    x: 0,
    y: 0
  },
  radius: 100,
}
circle.__proto__ = figure;    //NOSONAR as deprecated
console.log(circle.getType()); // circle
console.log(figure.getType()); // unknown