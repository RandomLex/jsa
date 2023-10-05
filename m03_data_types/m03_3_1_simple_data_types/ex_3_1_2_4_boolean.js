let boolObj1 = new Boolean;             //NOSONAR -> learning
let boolObj2 = new Boolean(true); //NOSONAR -> learning
let str1 = boolObj1.toString();           //NOSONAR -> learning
// When calling toString() or coercing into a string an object that doesn’t implement
// its own toString method, it returns [object Object] which is often not what was intended
let bool2 = boolObj2.valueOf();

console.log(`str1 : ${typeof str1} : ${str1}`);
console.log(`bool2 : ${typeof bool2} : ${bool2}`);

// Boolean has two object-methods:
// toString() and valueOf()

let bool3 = Boolean(false);
let bool4 = Boolean(1);
let bool5 = Boolean("");

console.log(`bool3 : ${typeof bool3} : ${bool3}`);
console.log(`bool4 : ${typeof bool4} : ${bool4}`);
console.log(`bool5 : ${typeof bool5} : ${bool5}`);
