let point = {
  x: 100,
  y: 200,
  get position() {return `${this.x} ${this.y}`}
}
console.log(point.position);