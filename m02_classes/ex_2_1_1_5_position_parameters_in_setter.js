let Vehicle = function({id, latitude, longitude}){

  this.setPosition = function({latitude, longitude}) {
    this.time = Date.now();
    this.latitude = latitude;
    this.longitude = longitude;
  };

  this.id = id;
  this.status = "unavailable";
  this.setPosition({latitude, longitude});
};

let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.358617, longitude: 17.947589});
let vehicle2 = new Vehicle({longitude: 17.947589, latitude: 59.358617, id: "AL1024"});
vehicle2.setPosition({latitude: 59.367647, longitude: 18.213451})
console.log(vehicle1);
console.log(vehicle2);

