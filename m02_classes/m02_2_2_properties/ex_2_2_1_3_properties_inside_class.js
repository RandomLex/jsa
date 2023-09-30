class Vehicle {

  status = "unavailable";

  constructor({id, latitude, longitude}){
    this.id = id;
    this.setPosition({latitude, longitude});
  };

  setPosition({latitude, longitude}) {
    this.time = Date.now();
    this.longitude = longitude;
    this.latitude = latitude;
  };

  getPosition() {
    return {
      latitude: this.latitude,
      longitude: this.longitude
    };
  };

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }
}
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.358617, longitude: 17.947589});
console.log(vehicle1);
vehicle1.setStatus("available");
console.log(vehicle1);