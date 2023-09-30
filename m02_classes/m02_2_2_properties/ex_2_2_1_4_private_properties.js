class Vehicle {
  status = 'unavailable';
  #latitude;
  #longitude;

  constructor({id, latitude, longitude}) {
    this.id = id;
    this.setPosition({latitude, longitude});
  }

  setPosition({latitude, longitude}) {
    this.time = Date.now();
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  getPosition() {
    return {
      longitude: this.#longitude,
      latitude: this.#latitude
    }
  }
}
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.358617, longitude: 17.947589});
console.log(vehicle1);
console.log(vehicle1.getPosition()); // { status: 'unavailable', id: 'AL1024', time: 1614178080000, longitude: 17.947589, latitude: 59.358617 }
// console.log(vehicle1.#latitude);  SyntaxError: Private field '#latitude' must be declared in an enclosing class