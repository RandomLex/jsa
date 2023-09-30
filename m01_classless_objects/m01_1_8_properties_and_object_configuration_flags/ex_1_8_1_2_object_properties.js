// Each property, apart from the name and value, has such attributes as
// writable, enumerable, and configurable.
// The configuration of properties will be set by manipulating these attributes.
let contact1 = {
  _age: 36,
  firstName: "David",
  lastName: "Taylor",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  get age() {
    return this._age;
  },
  set age(age) {
    if (age > 0) this._age = age;
  }
}

let keys = Object.keys(contact1);
console.log(keys); // [ '_age', 'firstName', 'lastName', 'fullName', 'age' ]

let desc = Object.getOwnPropertyDescriptor(contact1, "firstName");
console.log(desc); // { value: 'David', writable: true, enumerable: true, configurable: true }

let contact2 = {};
Object.defineProperty(contact2, "_age", {
  value: 36,
  writable: true,
  enumerable: false, // cannot be gotten by Object.keys()
  configurable: true
});

let keys2 = Object.keys(contact2); // [] because _age is not enumerable
console.log(keys2);
console.log(contact2._age); // 36


// to change the configuration of _firstName of contact1 to be non-writable and non-enumerable
Object.defineProperty(contact1, "firstName", {
  value: contact1.firstName,
  writable: false,
  enumerable: false,
  configurable: true
});

contact1.firstName = "John"; // it is not set because it is non-writable
console.log(contact1.firstName); // David

// Besides enumerable and writable, there is also an attribute called configurable in the configuration.
// Setting it to false will make it impossible
// to reconfigure the property
// or
// to delete it with the delete command.

// Object.keys() or for..in loop operate only on enumerable properties.

// However, there is a way to get all properties of an object, including non-enumerable ones.
// It is the Object.getOwnPropertyNames() method.
// It returns an array of all properties of an object, enumerable or not.
let contact1EnumKeys = Object.keys(contact1);
let allKeys = Object.getOwnPropertyNames(contact1);
console.log(contact1EnumKeys); // without firstName [ '_age', 'lastName', 'fullName', 'age' ]
console.log(allKeys); // with firsName [ '_age', 'firstName', 'lastName', 'fullName', 'age' ]

// Object configuration
// The configuration can also be changed at the level of the whole object (not only its individual properties).
//
// The following methods are used for this purpose, among others:
//
// Object.preventExtensions(obj) – after calling this method, we won't be able to add new properties to the object obj;
// Object.seal(obj) – does not allow the adding, removing, or reconfiguring of the properties of the object obj;
// Object.freeze(obj) similar to Object.seal, but additionally makes it impossible to change the value of the property.
// We also have methods to check if the object configuration has been changed.
//
// And so, we can use these methods respectively: Object.isExtensible, Object.isSealed(obj) and Object.isFrozen(obj).
// how to unfreeze an object
