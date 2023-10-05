let n = new Number(100.163); //NOSONAR - for learning purposes
let fixed = n.toFixed();
console.log(fixed);
let test1 = Number.isInteger(fixed);
console.log(test1); // false because fixed is a string
// let test2 = n.isInteger(100);  It is not a function
