class Vehicle {

  constructor({id, latitude, longitude}) {
    this.id = id;
    this.position = {latitude, longitude};
    this._status = 'unavailable';
  }

  set position({latitude, longitude}) {
    this.time = Date.now();
    this.latitude = latitude;
    this.longitude = longitude;
  }

  get position() {
    return {
      longitude: this.longitude,
      latitude: this.latitude
    }
  }

  set status(status) {
    this._status = status;
  }

  get status() {
    return this._status;
  }
}

class Bus extends Vehicle {
  constructor({id, latitude, longitude, seats}) {
    super({id, latitude, longitude});
    this.seats = seats;
  }
}
let bus1 = new Bus({id: "AL1024", latitude: 59.358617, longitude: 17.947589, seats: 40});
console.log(bus1.seats); // 40
console.log(bus1.id); // AL1024
console.log(bus1);
