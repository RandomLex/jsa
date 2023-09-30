let circle = {
  radius: 100,
  center: {
    x: 0,
    y:0,
    showCenter() { console.log(`x: ${this.x}, y: ${this.y}`) }
  }
}

circle.center.showCenter(); // x: 0, y: 0
