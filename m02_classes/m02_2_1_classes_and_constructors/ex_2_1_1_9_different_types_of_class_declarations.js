let AnotherEmptyClass = class {
  constructor(myParam) {
    console.log(myParam);
  }

  sayHello() {
    console.log('Hello');
  }
}
const anotherEmptyObject = new AnotherEmptyClass('just a parameter'); // just a parameter
console.log(anotherEmptyObject); // AnotherEmptyClass {}
anotherEmptyObject.sayHello(); // just a parameter

console.log(typeof AnotherEmptyClass); // function
console.log(typeof anotherEmptyObject); // object
console.log(anotherEmptyObject.constructor); // [Function: AnotherEmptyClass]
//however
console.log(anotherEmptyObject.constructor === AnotherEmptyClass); // true
console.log(anotherEmptyObject.constructor.name); // AnotherEmptyClass
console.log(anotherEmptyObject instanceof AnotherEmptyClass); // true
console.log(anotherEmptyObject instanceof Object); // true
console.log(anotherEmptyObject instanceof String); // false

console.log('------------------');

let AlmostEmpty = {
  constructor(myParam) {
    console.log(myParam);
  },
  sayHi() {
    console.log('Hi');
  }
}
const almostEmptyObject = Object.create(AlmostEmpty);
console.log(almostEmptyObject); // It'll print {}
anotherEmptyObject.sayHello(); // Hello

console.log(typeof AlmostEmpty); // object
console.log(typeof almostEmptyObject); // object
console.log(almostEmptyObject.constructor); // [Function: Object]
//however
console.log(almostEmptyObject.constructor === AlmostEmpty); // NOSONAR false
console.log(almostEmptyObject.constructor.name); // constructor
// console.log(almostEmptyObject instanceof AlmostEmpty);  TypeError: Right-hand side of 'instanceof' is not callable
console.log(almostEmptyObject instanceof Object); // true
console.log(almostEmptyObject instanceof String); // false
