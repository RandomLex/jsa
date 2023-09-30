let Vehicle = function(initialData){
  let {id, latitude, longitude} = initialData;

  this.setPosition = function(latitude, longitude) {
    this.time = Date.now();
    this.latitude = latitude;
    this.longitude = longitude;
  };

  this.id = id;
  this.status = "unavailable";
  this.setPosition(latitude, longitude);
};

let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.358617, longitude: 17.947589});
let vehicle2 = new Vehicle({latitude: 59.358617, longitude: 17.947589, id: "AL1024"});
console.log(vehicle1);
console.log(vehicle2);

