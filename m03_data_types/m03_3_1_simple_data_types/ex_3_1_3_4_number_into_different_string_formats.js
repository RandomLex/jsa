//The set of prototype methods of Number is not limited to valueOf and toString.
//
// We still have, among others, the following:
//
// toExponential(fractionDigits)
// toFixed(digits)
// toLocaleString([locales [, options])

// The first of these methods returns a string representing
// a number in exponential form, with one digit before the comma,
// rounded to fractionDigits after the comma. The argument may be omitted.

let a = 12345;
console.log(a.toExponential()); // -> 1.2345e+4
console.log(a.toExponential(1)); // -> 1.2e+4

let nr1 = 10.55;
console.log(nr1.toFixed());              // -> 11
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(2)); // -> 10.55
console.log(nr1.toFixed(3)); // -> 10.550

let nr2 = 2.55;
console.log(nr2.toFixed(1));              // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log((nr2 * 10).toFixed(0) / 10); // -> 2.6

