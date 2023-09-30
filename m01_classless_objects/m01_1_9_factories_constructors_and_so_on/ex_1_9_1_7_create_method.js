// The following code creates an empty object with no prototype
// There is no constructor property in the object
let reallyEmptyObject = Object.create(null);
console.log(reallyEmptyObject.constructor); // undefined