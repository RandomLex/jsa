class Vehicle {
  #latitude;
  #longitude;


  constructor({id, latitude, longitude}) {
    this.id = id;
    this.position = {latitude, longitude};
    this._status = 'unavailable';
  }

  set position({latitude, longitude}) {
    this.time = Date.now();
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  get position() {
    return {
      longitude: this.#longitude,
      latitude: this.#latitude
    }
  }

  set status(status) {
    this._status = status;
  }

  get status() {
    return this._status;
  }
}
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.358617, longitude: 17.947589});
console.log(vehicle1);
vehicle1.position = {latitude: 59.367647, longitude: 18.213451};
console.log(vehicle1.position); // { status: 'unavailable', id: 'AL1024', time: 1614178080000, longitude: 17.947589, latitude: 59.358617 }
vehicle1.status = 'available';
console.log(vehicle1.status); // available
// console.log(vehicle1.#latitude);  SyntaxError: Private field '#latitude' must be declared in an enclosing class