let testString = "Hello";
console.log(testString.length);

String.prototype.hi = function() {  //NOSONAR for learning purposes
  console.log(`Hi!`);
}
testString.hi(); // Hi!

let str = 'abc';
str.hi(); // Hi!