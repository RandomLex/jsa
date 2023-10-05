console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

let numbers = [2e100, 200000, 1.5, Infinity];
for(const element of numbers) {
  console.log(`is ${element} Integer: ${Number.isInteger(element)}`);
  console.log(`is ${element} safe Integer: ${Number.isSafeInteger(element)}`);
  console.log(`is ${element} finite number: ${Number.isFinite(element)}`);
}
