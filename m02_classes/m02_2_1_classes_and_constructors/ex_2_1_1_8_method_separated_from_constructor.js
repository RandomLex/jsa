class Vehicle {

  constructor({id, latitude, longitude}) {
    this.id = id;
    this.status = 'unavailable';
    this.setPosition({latitude, longitude});
  }

  setPosition = function ({latitude, longitude}) {
    this.time = Date.now();
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getPosition = function () {
    return {
      latitude: this.latitude,
      longitude: this.longitude
    }
  }
}
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.358617, longitude: 17.947589});
let vehicle2 = new Vehicle({latitude: 59.358617, longitude: 17.947589, id: "AL1024"});
console.log(vehicle1);
console.log(vehicle2);
vehicle1.setPosition({latitude: 59.367647, longitude: 18.213451});
vehicle1.status = 'available';
console.log(vehicle1);
