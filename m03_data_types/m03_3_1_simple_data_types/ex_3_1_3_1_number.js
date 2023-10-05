let a = 10; // decimal - default
let b = 0x10;   // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary

console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2

let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999 - not 0.9
console.log((x + y).toFixed(1));    // -> 0.9

console.log(x / 0);      // -> Infinity
console.log(x / "abc");  // -> NaN

//Number as Boolean also have two methods: toSource() and valueOf()
let n = new Number(100.163); //NOSONAR - for learning purposes
let fixed = n.toFixed();
console.log(fixed); // -> 100

let numberObj1 = new Number;                  // NOSONAR-> 0
let numberObj2 = new Number(100);       // NOSONAR -> 100
let numberObj3 = new Number("200");     // NOSONAR -> 200
let numberObj4 = new Number("abcd");    // NOSONAR -> NaN
let numberObj5 = new Number(9e10000);   // NOSONAR -> Infinity

console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0

let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`);              // -> nr : number : 100