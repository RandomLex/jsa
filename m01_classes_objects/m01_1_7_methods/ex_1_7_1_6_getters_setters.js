let contact = {
  _tel: "123-456-7890",
  get tel() {return this._tel},
}

console.log(contact.tel); // 123-456-7890
contact.tel = "987-654-3210";     // 123-456-7890 because there is no setter
// JavaScript doesn't allow us to change the value of a property that doesn't have a setter.
console.log(contact.tel); // 123-456-7890 still the same
contact.email = "RonaldMurphy@mail.com"; // it was not defined before, so it is created without any problem
console.log(contact.email); // returns without getter