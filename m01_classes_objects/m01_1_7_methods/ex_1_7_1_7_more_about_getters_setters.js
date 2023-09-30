let contact1 = {
  _tel: "123-456-7890",
  get tel() {return this._tel},
  set tel(tel) {this._tel = tel}
};

console.log(contact1.tel); // 123-456-7890
contact1.tel = "987-654-3210";
console.log(contact1.tel); // 987-654-3210

let contact2 = {
  _age: 36,
  firstName: "David",
  lastName: "Taylor",
  get fullName() {return `${this.firstName} ${this.lastName}`},
  get age() {return this._age},
  set age(age) { if (age > 0) this._age = age}
}

console.log(contact2._age);
console.log(contact2.age);
contact2.age = -20;   // it is not set because it is less than 0
console.log(contact2.age);